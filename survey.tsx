"use client"

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://hnxbevfbjbpqdjxqnjso.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhueGJldmZiamJwcWRqeHFuanNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1OTc1OTcsImV4cCI6MjA2NTE3MzU5N30.YtJ4NNOvJ6yFXtvU8nbr8CKqJk0xtemQiwcuG00O2aI",
)

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Dumbbell, Target, Clock, Users, MapPin, CreditCard, User, Mail, Phone } from "lucide-react"

export default function Component() {
  const [formData, setFormData] = useState({
    trainingLevel: "",
    goals: "",
    frequency: "",
    trainingType: "",
    currentMember: "",
    gymPreferences: [] as string[],
    location: "",
    interests: [] as string[],
    membership: "",
    firstName: "",
    email: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handlePreferenceChange = (preference: string, checked: boolean) => {
    if (checked && formData.gymPreferences.length < 3) {
      setFormData((prev) => ({
        ...prev,
        gymPreferences: [...prev.gymPreferences, preference],
      }))
    } else if (!checked) {
      setFormData((prev) => ({
        ...prev,
        gymPreferences: prev.gymPreferences.filter((p) => p !== preference),
      }))
    }
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, interest],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((i) => i !== interest),
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // For now, just log the data and show success
    console.log("Survey Data:", formData)

    // Simulate a brief loading time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    alert("Thanks! Your response has been recorded.")
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center border-red-500/20 bg-black/80 backdrop-blur">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">Survey Complete!</CardTitle>
            <CardDescription className="text-gray-300">
              Thanks for taking our training match survey. We'll be in touch soon to discuss your fitness journey.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => window.open("https://phg-las.com/", "_blank")}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
            >
              Visit Powerhouse Gym Las Vegas
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="border-red-500/20 bg-black/80 backdrop-blur">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4">
              <Dumbbell className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-white mb-2">Powerhouse Gym Las Vegas</CardTitle>
            <CardTitle className="text-xl text-red-400 mb-2">Training Match Survey</CardTitle>
            <CardDescription className="text-lg text-gray-300">
              "Are You Built for Powerhouse?" – Take the 2-Minute Survey and Find Out
            </CardDescription>
            <p className="text-sm text-gray-400 mt-2">
              Discover if you're a good fit for the most hardcore training facility in Las Vegas
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-400" />
                  <Label className="text-lg font-semibold text-white">1. What's your current training level?</Label>
                </div>
                <RadioGroup
                  value={formData.trainingLevel}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, trainingLevel: value }))}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                  {[
                    "Beginner (0–6 months)",
                    "Intermediate (6–24 months)",
                    "Advanced (2+ years)",
                    "Competitive Athlete or Bodybuilder",
                  ].map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-2 bg-gray-900/50 p-3 rounded-lg border border-gray-700"
                    >
                      <RadioGroupItem value={option} id={option} className="border-red-400 text-red-400" />
                      <Label htmlFor={option} className="text-gray-200 cursor-pointer flex-1">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Separator className="bg-gray-700" />

              {/* Question 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-400" />
                  <Label className="text-lg font-semibold text-white">2. What are your primary fitness goals?</Label>
                </div>
                <RadioGroup
                  value={formData.goals}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, goals: value }))}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                  {[
                    "Build muscle",
                    "Lose fat",
                    "Increase strength",
                    "Improve conditioning",
                    "Prep for a competition (NPC, powerlifting, etc.)",
                    "Just get in shape and stay consistent",
                  ].map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-2 bg-gray-900/50 p-3 rounded-lg border border-gray-700"
                    >
                      <RadioGroupItem value={option} id={option} className="border-red-400 text-red-400" />
                      <Label htmlFor={option} className="text-gray-200 cursor-pointer flex-1">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Separator className="bg-gray-700" />

              {/* Question 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-400" />
                  <Label className="text-lg font-semibold text-white">
                    3. How often do you train per week (on average)?
                  </Label>
                </div>
                <RadioGroup
                  value={formData.frequency}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, frequency: value }))}
                  className="grid grid-cols-2 md:grid-cols-4 gap-3"
                >
                  {["1–2 days", "3–4 days", "5–6 days", "Every damn day"].map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-2 bg-gray-900/50 p-3 rounded-lg border border-gray-700"
                    >
                      <RadioGroupItem value={option} id={option} className="border-red-400 text-red-400" />
                      <Label htmlFor={option} className="text-gray-200 cursor-pointer flex-1">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Separator className="bg-gray-700" />

              {/* Question 4 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Dumbbell className="w-5 h-5 text-red-400" />
                  <Label className="text-lg font-semibold text-white">
                    4. What type of training do you focus on most?
                  </Label>
                </div>
                <RadioGroup
                  value={formData.trainingType}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, trainingType: value }))}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                  {[
                    "Bodybuilding / Hypertrophy",
                    "Powerlifting / Strength",
                    "Functional / Athletic",
                    "HIIT / Circuit",
                    "General fitness",
                  ].map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-2 bg-gray-900/50 p-3 rounded-lg border border-gray-700"
                    >
                      <RadioGroupItem value={option} id={option} className="border-red-400 text-red-400" />
                      <Label htmlFor={option} className="text-gray-200 cursor-pointer flex-1">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Separator className="bg-gray-700" />

              {/* Question 5 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-red-400" />
                  <Label className="text-lg font-semibold text-white">
                    5. Are you currently a member of another gym?
                  </Label>
                </div>
                <RadioGroup
                  value={formData.currentMember}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, currentMember: value }))}
                  className="grid grid-cols-1 md:grid-cols-3 gap-3"
                >
                  {["Yes", "No", "I was, but looking to switch"].map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-2 bg-gray-900/50 p-3 rounded-lg border border-gray-700"
                    >
                      <RadioGroupItem value={option} id={option} className="border-red-400 text-red-400" />
                      <Label htmlFor={option} className="text-gray-200 cursor-pointer flex-1">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Separator className="bg-gray-700" />

              {/* Question 6 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <Label className="text-lg font-semibold text-white">
                    6. What's most important to you in a gym? (Select up to 3)
                  </Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Serious training environment",
                    "High-quality equipment",
                    "Competitive energy",
                    "Knowledgeable staff/trainers",
                    "Community vibe",
                    "No fluff / no crowding",
                    "Extended hours",
                  ].map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-2 bg-gray-900/50 p-3 rounded-lg border border-gray-700"
                    >
                      <Checkbox
                        id={option}
                        checked={formData.gymPreferences.includes(option)}
                        onCheckedChange={(checked) => handlePreferenceChange(option, checked as boolean)}
                        disabled={!formData.gymPreferences.includes(option) && formData.gymPreferences.length >= 3}
                        className="border-red-400 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                      />
                      <Label htmlFor={option} className="text-gray-200 cursor-pointer flex-1">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400">Selected: {formData.gymPreferences.length}/3</p>
              </div>

              <Separator className="bg-gray-700" />

              {/* Question 7 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <Label className="text-lg font-semibold text-white">
                    7. Are you located in Las Vegas or just visiting?
                  </Label>
                </div>
                <RadioGroup
                  value={formData.location}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, location: value }))}
                  className="grid grid-cols-2 md:grid-cols-4 gap-3"
                >
                  {["Local (full-time resident)", "Part-time resident", "Visiting (short term)", "Moving soon"].map(
                    (option) => (
                      <div
                        key={option}
                        className="flex items-center space-x-2 bg-gray-900/50 p-3 rounded-lg border border-gray-700"
                      >
                        <RadioGroupItem value={option} id={option} className="border-red-400 text-red-400" />
                        <Label htmlFor={option} className="text-gray-200 cursor-pointer flex-1">
                          {option}
                        </Label>
                      </div>
                    ),
                  )}
                </RadioGroup>
              </div>

              <Separator className="bg-gray-700" />

              {/* Question 8 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-400" />
                  <Label className="text-lg font-semibold text-white">
                    8. Would you be interested in any of the following?
                  </Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "1-on-1 personal training",
                    "Competition prep coaching",
                    "Nutrition consultations",
                    "Group classes (boxing, HIIT, etc.)",
                    "Gym-only access",
                  ].map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-2 bg-gray-900/50 p-3 rounded-lg border border-gray-700"
                    >
                      <Checkbox
                        id={option}
                        checked={formData.interests.includes(option)}
                        onCheckedChange={(checked) => handleInterestChange(option, checked as boolean)}
                        className="border-red-400 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                      />
                      <Label htmlFor={option} className="text-gray-200 cursor-pointer flex-1">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="bg-gray-700" />

              {/* Question 9 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-red-400" />
                  <Label className="text-lg font-semibold text-white">
                    9. What's your preferred membership option?
                  </Label>
                </div>
                <RadioGroup
                  value={formData.membership}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, membership: value }))}
                  className="grid grid-cols-2 md:grid-cols-4 gap-3"
                >
                  {["Monthly", "Annual", "No commitment (day/week pass)", "Not sure yet"].map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-2 bg-gray-900/50 p-3 rounded-lg border border-gray-700"
                    >
                      <RadioGroupItem value={option} id={option} className="border-red-400 text-red-400" />
                      <Label htmlFor={option} className="text-gray-200 cursor-pointer flex-1">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Separator className="bg-gray-700" />

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Contact Information</h3>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-red-400" />
                    <Label htmlFor="firstName" className="text-white font-medium">
                      10. First Name *
                    </Label>
                  </div>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-400"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-red-400" />
                    <Label htmlFor="email" className="text-white font-medium">
                      11. Email *
                    </Label>
                  </div>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-400"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-red-400" />
                    <Label htmlFor="phone" className="text-white font-medium">
                      12. Phone Number (optional)
                    </Label>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-400"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <Separator className="bg-gray-700" />

              <div className="text-center space-y-4">
                <Button
                  type="submit"
                  className="w-full md:w-auto px-12 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg"
                  disabled={!formData.firstName || !formData.email}
                >
                  🎯 SUBMIT SURVEY
                </Button>
                <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                  🔒 We take your fitness goals and privacy seriously. Your info stays with us.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
