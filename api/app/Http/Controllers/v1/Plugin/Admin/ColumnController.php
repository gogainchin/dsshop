<?php

namespace App\Http\Controllers\v1\Plugin\Admin;

use App\Http\Requests\v1\SubmitColumnRequest;
use App\Models\v1\Article;
use App\Models\v1\ArticleProperty;
use App\Models\v1\Column;
use App\Models\v1\ColumnProperty;
use App\Models\v1\Resource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

/**
 * Column
 * 栏目管理
 * Class ColumnController
 * @package App\Http\Controllers\v1\Plugin\Admin
 */
class ColumnController extends Controller
{
    /**
     * ColumnList
     * 栏目列表
     * @param Request $request
     * @return \Illuminate\Http\Response
     * @queryParam  title string 栏目名称
     * @queryParam  limit int 每页显示条数
     * @queryParam  sort string 排序
     * @queryParam  page string 页码
     */
    public function list(Request $request)
    {
        $q = Column::query();
        if ($request->has('sort')) {
            $sortFormatConversion = sortFormatConversion($request->sort);
            $q->orderBy($sortFormatConversion[0], $sortFormatConversion[1]);
        }
        $limit = $request->limit;
        if ($request->title) {
            $q->where('name', 'like', '%' . $request->title . '%');
        }
        $paginate = $q->with(['Column'])->paginate($limit);
        return resReturn(1, $paginate);
    }

    /**
     * ColumnCreate
     * 栏目添加
     * @param SubmitColumnRequest $request
     * @return \Illuminate\Http\Response
     * @queryParam  name string 栏目名称
     * @queryParam  pid int 上级栏目ID
     * @queryParam  keyword string 关键字
     * @queryParam  describes string 描述
     * @queryParam  show int 是否显示
     * @queryParam  list int 是否列表
     * @queryParam  sort int 排序
     */
    public function create(SubmitColumnRequest $request)
    {
        $return = DB::transaction(function () use ($request) {
            $Column = new Column();
            $Column->name = $request->name;
            $Column->pid = $request->pid;
            $Column->keyword = $request->keyword;
            $Column->describes = $request->describes;
            $Column->show = $request->show ? Column::COLUMN_SHOW_YES : Column::COLUMN_SHOW_NO;
            $Column->list = $request->list;
            $Column->sort = $request->sort;
            $Column->save();
            $ColumnProperty = new ColumnProperty();
            $ColumnProperty->column_id = $Column->id;
            $ColumnProperty->details = $request->column_property['details'];
            $ColumnProperty->save();
            if ($request->resources['img']) {
                $Resource = new Resource();
                $Resource->type = Resource::RESOURCE_TYPE_IMG;
                $Resource->depict = 'column_' . $Column->id;
                $Resource->image_id = $Column->id;
                $Resource->image_type = 'App\Models\v1\Column';
                $Resource->img = imgPathShift('column', $request->resources['img']);
                $Resource->save();
            }
            return 1;
        }, 5);
        if ($return == 1) {
            return resReturn(1, '添加成功');
        } else {
            return resReturn(0, $return[0], $return[1]);
        }
    }

    /**
     * ColumnDetail
     * 栏目详情
     * @param int $id
     * @return \Illuminate\Http\Response
     * @queryParam  id int 栏目ID
     */
    public function detail($id)
    {
        $return = [];
        $return['column'] = Column::with(['ColumnProperty', 'resources'])->find($id);
        $Column = Column::where('pid', 0)->where('id', '!=', $id)->get();
        if ($Column) {
            $return['pidList'] = collect($Column)->prepend(array(
                'id' => 0,
                'name' => '顶级分组'
            ));
        }
        return resReturn(1, $return);
    }

    /**
     * ColumnEdit
     * 栏目更新
     * @param SubmitColumnRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     * @queryParam  id int 栏目ID
     * @queryParam  name string 栏目名称
     * @queryParam  pid int 上级栏目ID
     * @queryParam  keyword string 关键字
     * @queryParam  describes string 描述
     * @queryParam  show int 是否显示
     * @queryParam  list int 是否列表
     * @queryParam  sort int 排序
     */
    public function edit(SubmitColumnRequest $request, $id)
    {
        $return = DB::transaction(function () use ($request, $id) {
            $Column = Column::find($id);
            $Column->name = $request->name;
            $Column->pid = $request->pid;
            $Column->keyword = $request->keyword;
            $Column->describes = $request->describes;
            $Column->show = $request->show ? Column::COLUMN_SHOW_YES : Column::COLUMN_SHOW_NO;
            $Column->list = $request->list;
            $Column->sort = $request->sort;
            $Column->save();
            $ColumnProperty = ColumnProperty::where('column_id', $Column->id)->first();
            $ColumnProperty->details = $request->column_property['details'];
            $ColumnProperty->save();
            if ($request->resources) {
                if (array_key_exists('id', $request->resources)) {
                    $Resource = Resource::find($request->resources['id']);
                    if ($request->resources['img'] != $Resource->img) {
                        imgPathDelete('column', $Resource->img);
                    }
                    $Resource->img = imgPathShift('column', $request->resources['img']);
                    $Resource->save();
                } else {
                    if ($request->resources['img']) {
                        $Resource = new Resource();
                        $Resource->type = Resource::RESOURCE_TYPE_IMG;
                        $Resource->depict = 'column_' . $Column->id;
                        $Resource->image_id = $Column->id;
                        $Resource->image_type = 'App\Models\v1\Column';
                        $Resource->img = imgPathShift('column', $request->resources['img']);
                        $Resource->save();
                    }
                }
            }
            return 1;
        }, 5);
        if ($return == 1) {
            return resReturn(1, '更新成功');
        } else {
            return resReturn(0, $return[0], $return[1]);
        }
    }

    /**
     * ColumnDestroy
     * 栏目删除
     * @param int $id
     * @return \Illuminate\Http\Response
     * @queryParam  id int 栏目ID
     */
    public function destroy($id)
    {
        $return = DB::transaction(function () use ($id) {
            $Resource = Resource::where('image_type', 'App\Models\v1\Column')->where('image_id', $id)->first();
            Resource::where('id', $Resource->id)->delete();
            imgPathDelete('column', $Resource->img);
            Column::where('id', $id)->delete();
            ColumnProperty::where('column_id', $id)->delete();
            //删除栏目下的文章
            $Article = Article::where('column_id', $id)->with(['resources'])->get();
            foreach ($Article as $a) {
                Resource::where('id', $Article->resources->id)->delete();
                imgPathDelete('article', $a->resources->img);
                Article::where('id', $a->id)->delete();
                ArticleProperty::where('article_id', $a->id)->delete();
            }
            return 1;
        }, 5);
        if ($return == 1) {
            return resReturn(1, '删除成功');
        } else {
            return resReturn(0, $return[0], $return[1]);
        }
    }
}
