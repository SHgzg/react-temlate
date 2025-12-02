import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 导航栏 */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-bold text-xl">AppName</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">产品</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">解决方案</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">定价</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">关于</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => window.location.href = '/login'}>
                登录
              </Button>
              <Button onClick={() => window.location.href = '/dashboard'}>
                开始使用
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">🎉 全新功能上线</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                智能化的业务
                <span className="text-blue-600">管理平台</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                帮助您简化工作流程，提升团队效率，实现业务增长。从数据分析到团队协作，一站式解决您的所有需求。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-3">
                  免费试用
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  观看演示
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 特性展示 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                为什么选择我们
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                我们提供业界领先的解决方案，帮助您的业务实现数字化转型
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle className="mb-2">数据可视化</CardTitle>
                <CardDescription className="text-gray-600">
                  直观的图表和报表，让数据分析和决策变得简单高效
                </CardDescription>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="mb-2">团队协作</CardTitle>
                <CardDescription className="text-gray-600">
                  强大的协作工具，让团队沟通更顺畅，项目推进更高效
                </CardDescription>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <CardTitle className="mb-2">安全可靠</CardTitle>
                <CardDescription className="text-gray-600">
                  企业级安全保障，数据加密存储，确保您的业务信息安全
                </CardDescription>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="mb-2">高性能</CardTitle>
                <CardDescription className="text-gray-600">
                  快速响应，稳定运行，为您提供流畅的使用体验
                </CardDescription>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <CardTitle className="mb-2">自动化流程</CardTitle>
                <CardDescription className="text-gray-600">
                  智能化工作流，减少重复操作，提升工作效率
                </CardDescription>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <CardTitle className="mb-2">定制化配置</CardTitle>
                <CardDescription className="text-gray-600">
                  灵活的配置选项，满足不同行业和规模的需求
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        {/* 数据统计 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                获得业界认可的解决方案
              </h2>
              <p className="text-xl text-gray-600">
                已帮助数千家企业实现数字化转型
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-lg text-gray-600">活跃用户</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-lg text-gray-600">企业客户</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-lg text-gray-600">系统可用性</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-lg text-gray-600">技术支持</div>
              </div>
            </div>
          </div>
        </section>

        {/* 客户评价 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                客户的声音
              </h2>
              <p className="text-xl text-gray-600">
                听听我们的客户怎么说
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "这个平台彻底改变了我们的工作方式。团队效率提升了至少50%，而且界面非常直观易用。"
                  </p>
                  <Separator className="mb-4" />
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="https://avatar.vercel.sh/customer1" />
                      <AvatarFallback>张总</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">张总</div>
                      <div className="text-sm text-gray-500">科技公司 CEO</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "数据分析功能非常强大，帮助我们做出了更明智的业务决策。客服团队也很专业，总是能及时解决问题。"
                  </p>
                  <Separator className="mb-4" />
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="https://avatar.vercel.sh/customer2" />
                      <AvatarFallback>李经理</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">李经理</div>
                      <div className="text-sm text-gray-500">零售业运营总监</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "相比其他产品，这个平台的性价比很高。功能全面，性能稳定，非常适合我们这样的中小企业。"
                  </p>
                  <Separator className="mb-4" />
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="https://avatar.vercel.sh/customer3" />
                      <AvatarFallback>王主管</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">王主管</div>
                      <div className="text-sm text-gray-500">制造企业IT主管</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 行动号召 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 md:p-12">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl md:text-4xl mb-4">
                  准备开始您的数字化转型之旅吗？
                </CardTitle>
                <CardDescription className="text-xl">
                  加入数千家企业的行列，让我们的平台助力您的业务增长
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8 py-3">
                    开始免费试用
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                    预约产品演示
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  无需信用卡 · 14天免费试用 · 随时取消
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="font-bold text-xl">AppName</span>
              </div>
              <p className="text-gray-400 mb-4">
                智能化业务管理平台，助力企业实现数字化转型，提升工作效率。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">产品</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">功能特性</a></li>
                <li><a href="#" className="hover:text-white transition-colors">定价方案</a></li>
                <li><a href="#" className="hover:text-white transition-colors">客户案例</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">支持</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">服务条款</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AppName. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}