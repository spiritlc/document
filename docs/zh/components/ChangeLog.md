<commons-log>
### 2.15.9

*2022-06-02*

#### Bug 修复

- Table
  - 表头抖动修复 (#21863 by @bofeng)
  - 按需引用时 `el-checkbox not imported` 修复 (#21828 by @bobohuochai)
- FormItem
  - 修复 rules 切换为 null 时校验未重置 问题 (#21892 by @bofeng)
- Cascader
  - 修复 切换 options 时错误报错信息 问题 (#21759 by @louiebb)
- Docs
  - 修复 Popover 文案 (#21843 by @lod61)
  - 修复 Calendar 文案 (#21814 by @GoJam11)
  - 修复 TimePicker 文案 (#21803 by @Alanscut)
  - 修复 DatePicker 文案 (#21877 by @Nirvanaiu)
- 其他
  - 官网在线演示功能修复 (#21863 by @bofeng)

#### 优化

- I18n
  - 新增 斯瓦希里语 翻译 (#21895 by @quilltouch)
- Chore
  - 本地开发时可从 devTools 工具跳转源代码 (#21633 by @polemices)
- DatePicker & Cascader
  - 弹窗方向优化 (#21806 by @XivLaw)
- Tooltip
  - 优化 `getFirstElement` 代码 (#21886 by @zhankang)
- Input
  - 优化 scss 代码 (#21558 by @cheese-git)

### 2.15.8

*2022-04-12*

#### Bug 修复

- Drawer
  - 修复 appendToBody 失效问题 (#21264 by @cs1707)
- Switch
  - 修复 toggling value 问题(#19473 by @EdwinBetanc0urt)
- Docs
  - 修复 input 文案 (#21723 by @justforuse)
  - 修复 DatePicker 文案 (#21663 by @justforuse)
  - 修复 Skeleton 文案 (#21601 by @yanwydxf)
- 其他
  - 修复 vue 版本(#21736 by @ckvv)

#### 优化

- I18n
  - 新增 阿塞拜疆语 翻译 (#21012 by @ricardotondello)
  - 更新 斯洛文尼亚语 翻译 (#21729 by @patik123)
  - 更新 斯洛伐克语 翻译 (#21711 by @sjaustirni )
  - 新增 冰岛语 的翻译 (#21709 by @aronhr)
  - 新增 孟加拉 语的翻译 (#21485 by @llwwtt)

#### 其他

- 因兼容性考虑，撤回2.15.7关于node-sass的更新(#21019 by @linxsbox)，重新评估后会在后续合适版本上线

### 2.15.7

*2021-11-18*

#### Bug 修复

- Select
  - 修复 filter 模式下，点击图标不能触发下拉的 bug (#21314 by @dennyak47)
  - 修复 composition 模式下 keydown 事件 (#21336 by @bchen1029)
- Badge
  - 修复 is-dot class (#21308 by @adaex)
- Form
  - validate 方法返回错误信息 (#21374 by @cs1707)
- Table
  - 修复 resizeObserver loop limit exceeded (#21255 by @tomieric)
  - 修复 toggleAllSelection (#21456 by @cs1707)
  - 优化 table 性能 (#21330 by @cs1707)
- Button
  - 修复 disabled 优先级 (#21375 by @cs1707)
- Descriptions
  - 修复 label slot bug (#21462 by @cs1707)
- SASS
  - node-sass 替换为 dart-sass (#21019 by @linxsbox)
- Docs
  - 修复 skeleton 文案 (#21408 by @zhhbstudio)

</commons-log>