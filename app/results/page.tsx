"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, TrendingUp, Target, ArrowRight, Star, BookOpen, Award, Briefcase, Download, Share } from "lucide-react"
import Link from "next/link"

export default function Results() {
  const skills = [
    { name: "Python", level: 85, trend: "High Demand", category: "Programming" },
    { name: "Machine Learning", level: 78, trend: "Growing", category: "AI/ML" },
    { name: "React", level: 92, trend: "Stable", category: "Frontend" },
    { name: "Data Analysis", level: 70, trend: "High Demand", category: "Analytics" },
    { name: "SQL", level: 88, trend: "Essential", category: "Database" },
    { name: "AWS", level: 65, trend: "Growing", category: "Cloud" },
  ]

  const recommendations = [
    {
      type: "Certification",
      title: "AWS Solutions Architect",
      description: "Boost your cloud skills with this industry-recognized certification",
      priority: "High",
      timeframe: "3-4 months",
      icon: Award,
    },
    {
      type: "Project",
      title: "End-to-End ML Pipeline",
      description: "Build a complete machine learning project showcasing your skills",
      priority: "Medium",
      timeframe: "2-3 weeks",
      icon: Briefcase,
    },
    {
      type: "Upskilling",
      title: "Advanced Python for Data Science",
      description: "Deepen your Python expertise with advanced data science techniques",
      priority: "Medium",
      timeframe: "6-8 weeks",
      icon: BookOpen,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SkillSnap
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="sm">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Link href="/dashboard">
              <Button variant="ghost">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your SkillSnap Analysis</h1>
          <p className="text-gray-600">AI-powered insights into your resume and career potential</p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Overall Score</p>
                  <p className="text-2xl font-bold text-blue-600">87%</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Skills Identified</p>
                  <p className="text-2xl font-bold text-green-600">24</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Market Alignment</p>
                  <p className="text-2xl font-bold text-purple-600">92%</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Growth Areas</p>
                  <p className="text-2xl font-bold text-orange-600">5</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="skills" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
            <TabsTrigger value="benchmarking">Market Benchmarking</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Skills Breakdown</CardTitle>
                <CardDescription>
                  AI-extracted skills from your resume with proficiency levels and market relevance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.category}
                          </Badge>
                          <Badge
                            variant={
                              skill.trend === "High Demand"
                                ? "default"
                                : skill.trend === "Growing"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {skill.trend}
                          </Badge>
                        </div>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benchmarking" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Local Market Analysis</CardTitle>
                  <CardDescription>Your skills vs. local job market demands</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Software Development</span>
                      <div className="flex items-center gap-2">
                        <Progress value={85} className="w-20 h-2" />
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Data Science</span>
                      <div className="flex items-center gap-2">
                        <Progress value={78} className="w-20 h-2" />
                        <span className="text-sm font-medium">78%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cloud Computing</span>
                      <div className="flex items-center gap-2">
                        <Progress value={65} className="w-20 h-2" />
                        <span className="text-sm font-medium">65%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Global Trends</CardTitle>
                  <CardDescription>How your skills align with global market trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-medium text-green-800 mb-2">Strong Areas</h4>
                      <p className="text-sm text-green-700">React, Python, SQL - High global demand</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h4 className="font-medium text-yellow-800 mb-2">Growth Opportunities</h4>
                      <p className="text-sm text-yellow-700">Cloud platforms, DevOps, AI/ML specialization</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-800 mb-2">Emerging Skills</h4>
                      <p className="text-sm text-blue-700">Kubernetes, Terraform, MLOps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="grid gap-6">
              {recommendations.map((rec, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <rec.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{rec.type}</Badge>
                          <Badge variant={rec.priority === "High" ? "default" : "secondary"}>
                            {rec.priority} Priority
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{rec.title}</h3>
                        <p className="text-gray-600 mb-3">{rec.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Estimated time: {rec.timeframe}</span>
                          <Button size="sm">
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
