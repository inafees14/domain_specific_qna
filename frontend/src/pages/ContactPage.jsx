import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliation: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - in production, this would call an API
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast.success("Message sent! We'll get back to you within 2-3 business days.");
      setFormData({ name: "", email: "", affiliation: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We work with research teams, startups, and organizations that value rigorous analysis. Tell us about your project.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1.5 border-border focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1.5 border-border focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="affiliation" className="text-foreground">Affiliation (optional)</Label>
                    <Input
                      id="affiliation"
                      name="affiliation"
                      type="text"
                      value={formData.affiliation}
                      onChange={handleChange}
                      className="mt-1.5 border-border focus:ring-primary"
                      placeholder="University, company, or organization"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Problem description *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1.5 border-border focus:ring-primary min-h-[150px]"
                      placeholder="Tell us about your project, research question, or the problem you're trying to solve..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Send message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We typically respond within 2-3 business days. If your project is time-sensitive, please mention that in your message.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Direct Email</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Prefer email?</p>
                    <a href="mailto:contact@axionresearch.com" className="text-sm text-primary hover:opacity-80">
                      contact@axionresearch.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">What to Include</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Brief project description</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Type of analysis needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Timeline and budget range</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Any specific constraints</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            We respect your privacy. Your contact information will never be shared, and we only use it to respond to your inquiry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
