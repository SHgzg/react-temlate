import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

// 模拟数据
const revenueData = [
  { month: "1月", revenue: 4000, users: 240 },
  { month: "2月", revenue: 3000, users: 198 },
  { month: "3月", revenue: 2000, users: 170 },
  { month: "4月", revenue: 2780, users: 230 },
  { month: "5月", revenue: 1890, users: 210 },
  { month: "6月", revenue: 2390, users: 250 },
  { month: "7月", revenue: 3490, users: 320 },
]

const recentTransactions = [
  { id: "1", customer: "张三", email: "zhangsan@example.com", amount: "¥2,400", status: "已完成", date: "2024-01-15" },
  { id: "2", customer: "李四", email: "lisi@example.com", amount: "¥1,200", status: "处理中", date: "2024-01-14" },
  { id: "3", customer: "王五", email: "wangwu@example.com", amount: "¥3,600", status: "已完成", date: "2024-01-13" },
  { id: "4", customer: "赵六", email: "zhaoliu@example.com", amount: "¥800", status: "待处理", date: "2024-01-12" },
  { id: "5", customer: "陈七", email: "chenqi@example.com", amount: "¥5,200", status: "已完成", date: "2024-01-11" },
]

const stats = [
  { title: "总收入", value: "¥18,590", change: "+12.5%", trend: "up" },
  { title: "总用户", value: "1,618", change: "+8.2%", trend: "up" },
  { title: "订单数", value: "248", change: "-2.4%", trend: "down" },
  { title: "转化率", value: "3.2%", change: "+1.1%", trend: "up" },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">仪表板</h1>
          <p className="text-muted-foreground">查看您的业务概览和关键指标</p>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>
                  {stat.change}
                </span>
                {" "}较上月
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 图表区域 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>收入趋势</CardTitle>
            <CardDescription>过去7个月的收入变化</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>用户增长</CardTitle>
            <CardDescription>过去7个月的用户增长</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* 最近交易表格 */}
      <Card>
        <CardHeader>
          <CardTitle>最近交易</CardTitle>
          <CardDescription>最新的订单交易记录</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>客户</TableHead>
                <TableHead>邮箱</TableHead>
                <TableHead>金额</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>日期</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://avatar.vercel.sh/${transaction.customer}`} />
                        <AvatarFallback>{transaction.customer.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      {transaction.customer}
                    </div>
                  </TableCell>
                  <TableCell>{transaction.email}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.status === "已完成" ? "default" :
                        transaction.status === "处理中" ? "secondary" : "destructive"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* 进度和目标 */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>月度目标</CardTitle>
            <CardDescription>当前月份的KPI完成情况</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>销售目标</span>
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>用户增长</span>
                <span>60%</span>
              </div>
              <Progress value={60} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>客户满意度</span>
                <span>92%</span>
              </div>
              <Progress value={92} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>团队表现</CardTitle>
            <CardDescription>团队成员的工作效率</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://avatar.vercel.sh/user1" />
                <AvatarFallback>A1</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">张明</p>
                <p className="text-sm text-muted-foreground">完成率: 95%</p>
              </div>
              <Progress value={95} className="w-20" />
            </div>
            <Separator />
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://avatar.vercel.sh/user2" />
                <AvatarFallback>A2</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">李华</p>
                <p className="text-sm text-muted-foreground">完成率: 88%</p>
              </div>
              <Progress value={88} className="w-20" />
            </div>
            <Separator />
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://avatar.vercel.sh/user3" />
                <AvatarFallback>A3</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">王芳</p>
                <p className="text-sm text-muted-foreground">完成率: 92%</p>
              </div>
              <Progress value={92} className="w-20" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}