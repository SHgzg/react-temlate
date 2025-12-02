import { useState, ReactNode } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Home, Users, BarChart3, FileText, Building, Settings, Menu, X } from 'lucide-react'

interface MainLayoutProps {
  children: ReactNode
}

const navigation = [
  {
    title: "仪表板",
    href: "/",
    icon: <Home size={20} />,
  },
  {
    title: "用户管理",
    href: "/users",
    icon: <Users size={20} />,
  },
  {
    title: "数据分析",
    href: "/analytics",
    icon: <BarChart3 size={20} />,
  },
  {
    title: "文档",
    href: "/docs",
    icon: <FileText size={20} />,
  },
  {
    title: "组织管理",
    href: "/organization",
    icon: <Building size={20} />,
  },
  {
    title: "系统设置",
    href: "/settings",
    icon: <Settings size={20} />,
  },
]

function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs = [{ title: "首页", href: "/" }]

  let currentPath = ""
  segments.forEach((segment) => {
    currentPath += `/${segment}`
    const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
    breadcrumbs.push({ title, href: currentPath })
  })

  return breadcrumbs
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const breadcrumbs = generateBreadcrumbs(location.pathname)

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">管理系统</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              activeProps={{
                className: "flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-md",
              }}
            >
              {item.icon}
              <span className="font-medium">{item.title}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">管理系统</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  activeProps={{
                    className: "flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-md",
                  }}
                >
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-md md:hidden"
              >
                <Menu size={20} />
              </button>

              {/* Breadcrumbs */}
              <nav className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                {breadcrumbs.map((breadcrumb, index) => (
                  <div key={breadcrumb.href} className="flex items-center">
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-gray-900 font-medium">{breadcrumb.title}</span>
                    ) : (
                      <>
                        <Link
                          to={breadcrumb.href}
                          className="hover:text-gray-900 transition-colors"
                        >
                          {breadcrumb.title}
                        </Link>
                        <span className="mx-2">/</span>
                      </>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-md">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}