"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Upload, FileText, Brain, TrendingUp, Target, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const handleFileUpload = () => {
    setIsAnalyzing(true)
    // Simulate upload and analysis progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsAnalyzing(false)
          setAnalysisComplete(true)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

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
          <nav className="flex items-center space-x-4">
            <Button variant="ghost">Dashboard</Button>
            <Button variant="ghost">History</Button>
            <Button variant="ghost">Settings</Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Resume Analysis Dashboard</h1>
          <p className="text-gray-600">Upload your resume to get AI-powered insights and career recommendations</p>
        </div>

        {!analysisComplete ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Resume
                </CardTitle>
                <CardDescription>Upload your resume in PDF or Word format for AI analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Drop your resume here</p>
                  <p className="text-gray-500 mb-4">or click to browse files</p>
                  <Button onClick={handleFileUpload} disabled={isAnalyzing}>
                    {isAnalyzing ? "Analyzing..." : "Choose File"}
                  </Button>
                </div>

                {isAnalyzing && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Analysis Progress</span>
                      <span className="text-sm text-gray-500">{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="mb-2" />
                    <p className="text-sm text-gray-600">AI is analyzing your resume and benchmarking skills...</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Features Preview */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>What You'll Get</CardTitle>
                <CardDescription>Comprehensive AI-powered analysis of your resume and career potential</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">AI Resume Analysis</h4>
                    <p className="text-sm text-gray-600">
                      Deep analysis of skills, experience, and optimization opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Market Benchmarking</h4>
                    <p className="text-sm text-gray-600">
                      Compare your skills against local and global job market trends
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Personalized Recommendations</h4>
                    <p className="text-sm text-gray-600">
                      Tailored suggestions for projects, certifications, and upskilling
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-green-800">Analysis Complete!</h3>
                    <p className="text-green-700">
                      Your resume has been successfully analyzed. View your results below.
                    </p>
                  </div>
                  <Link href="/results" className="ml-auto">
                    <Button className="bg-green-600 hover:bg-green-700">
                      View Results
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Skills Identified</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
                  <p className="text-sm text-gray-600">Technical and soft skills extracted from your resume</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Market Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                  <p className="text-sm text-gray-600">Your skills match current market demands</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
                  <p className="text-sm text-gray-600">Personalized suggestions for career growth</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
