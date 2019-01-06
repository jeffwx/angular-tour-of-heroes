import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 导入 HeroesComponent，以便能在 Route 中引用它。 然后定义一个路由数组，其中的某个路由是指向这个组件的。
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
// 典型的 Angular 路由（Route）有两个属性：
// path：一个用于匹配浏览器地址栏中 URL 的字符串。
// component：当导航到此路由时，路由器应该创建哪个组件。
@NgModule({
  declarations: [],
  exports: [RouterModule],
  // 把 RouterModule 添加到 @NgModule.imports 数组中，并用 routes 来配置它。
  // 你只要调用 imports 数组中的 RouterModule.forRoot() 函数就行了。
  // forRoot() 方法会提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航。
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}
