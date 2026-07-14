"use client";

import { useState } from "react";
import {
  BarChart3,
  BriefcaseBusiness,
  FileText,
  ImagePlus,
  LayoutDashboard,
  Lock,
  MessageSquare,
  Newspaper,
  Package,
  Search,
  Settings,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { blogs } from "@/data/blogs";
import { company } from "@/data/company";
import { faqs } from "@/data/faq";
import { jobs } from "@/data/jobs";
import { portfolio } from "@/data/portfolio";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const nav = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "services", label: "Services", icon: BriefcaseBusiness },
  { key: "products", label: "Products", icon: Package },
  { key: "reviews", label: "Reviews", icon: Star },
  { key: "blogs", label: "Blogs", icon: Newspaper },
  { key: "portfolio", label: "Portfolio", icon: ImagePlus },
  { key: "faq", label: "FAQ", icon: MessageSquare },
  { key: "careers", label: "Careers", icon: FileText },
  { key: "settings", label: "Settings", icon: Settings },
  { key: "seo", label: "SEO", icon: Search },
];

export function AdminDashboard() {
  const [active, setActive] = useState("dashboard");
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <section className="grid min-h-screen place-items-center bg-muted px-4 py-16">
        <Card className="w-full max-w-md">
          <div className="inline-flex size-12 items-center justify-center rounded-lg bg-primary text-white">
            <Lock className="size-5" />
          </div>
          <h1 className="mt-5 text-3xl font-black text-gray-900 dark:text-gray-100">Admin Login</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Mock authentication UI. Connect this screen to your backend auth provider later.
          </p>
          <div className="mt-6 grid gap-4">
            <Input defaultValue="admin@humpitechnology.in" aria-label="Admin email" />
            <Input type="password" defaultValue="password" aria-label="Admin password" />
            <Button onClick={() => setLoggedIn(true)}>Login to Dashboard</Button>
          </div>
        </Card>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-muted">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-border bg-card p-4 lg:min-h-screen">
          <h1 className="px-3 py-4 text-xl font-black text-gray-900 dark:text-gray-100">Humpi Admin</h1>
          <div className="grid gap-1">
            {nav.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-semibold transition ${
                    active === item.key ? "bg-primary text-white" : "text-slate-600 hover:bg-muted dark:text-slate-300"
                  }`}
                >
                  <Icon className="size-4" /> {item.label}
                </button>
              );
            })}
          </div>
        </aside>
        <main className="p-4 sm:p-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-primary">Mock CMS UI</p>
              <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100">{nav.find((item) => item.key === active)?.label}</h2>
            </div>
            <Button variant="secondary">Add New</Button>
          </div>
          <AdminPanel active={active} />
        </main>
      </div>
    </section>
  );
}

function AdminPanel({ active }: { active: string }) {
  if (active === "dashboard") {
    return (
      <div className="grid gap-5 md:grid-cols-4">
        <Metric label="Services" value={services.length} />
        <Metric label="Products" value={products.length} />
        <Metric label="Blogs" value={blogs.length} />
        <Metric label="Reviews" value={testimonials.length} />
        <Card className="md:col-span-4">
          <div className="flex items-center gap-3">
            <BarChart3 className="size-5 text-primary" />
            <h3 className="font-black text-gray-900 dark:text-gray-100">Backend integration notes</h3>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
            Data is isolated in files under /data. Replace those imports with API calls, Prisma, Supabase, Strapi, Sanity, or another CMS without changing page layouts.
          </p>
        </Card>
      </div>
    );
  }

  if (active === "settings") {
    return (
      <Card className="max-w-3xl">
        <h3 className="text-xl font-black text-gray-900 dark:text-gray-100">Contact Information</h3>
        <div className="mt-5 grid gap-4">
          <Input defaultValue={company.name} />
          <Input defaultValue={company.email} />
          <Input defaultValue={company.phone} />
          <Input defaultValue={company.location} />
          <Textarea defaultValue={company.description} />
        </div>
      </Card>
    );
  }

  if (active === "seo") {
    return (
      <Card className="max-w-3xl">
        <h3 className="text-xl font-black text-gray-900 dark:text-gray-100">SEO Settings</h3>
        <div className="mt-5 grid gap-4">
          <Input defaultValue="Humpi Technology | IT Services, Software, AI Automation and Digital Growth" />
          <Textarea defaultValue={company.description} />
          <Input defaultValue="https://humpitechnology.in" />
          <Input defaultValue="Google Analytics ID placeholder" />
          <Input defaultValue="Google Search Console verification placeholder" />
        </div>
      </Card>
    );
  }

  if (active === "services") return <Table rows={services.map((item) => [item.title, item.description, item.features.length.toString()])} headers={["Title", "Description", "Features"]} />;
  if (active === "products") return <Table rows={products.map((item) => [item.title, item.category, item.price, item.status])} headers={["Title", "Category", "Price", "Status"]} />;
  if (active === "reviews") return <Table rows={testimonials.map((item) => [item.name, item.company, item.designation, `${item.rating} stars`])} headers={["Name", "Company", "Designation", "Rating"]} />;
  if (active === "blogs") return <Table rows={blogs.map((item) => [item.title, item.category, item.date, item.readTime])} headers={["Title", "Category", "Date", "Read Time"]} />;
  if (active === "portfolio") return <Table rows={portfolio.map((item) => [item.title, item.client, item.category, item.duration])} headers={["Title", "Client", "Category", "Duration"]} />;
  if (active === "faq") return <Table rows={faqs.map((item) => [item.question, item.answer])} headers={["Question", "Answer"]} />;
  if (active === "careers") return <Table rows={jobs.map((item) => [item.title, item.location, item.type, item.experience])} headers={["Title", "Location", "Type", "Experience"]} />;

  return null;
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <Card>
      <p className="text-sm font-bold text-slate-500">{label}</p>
      <p className="mt-2 text-4xl font-black text-primary">{value}</p>
    </Card>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-secondary text-white">
            <tr>{headers.map((header) => <th key={header} className="px-4 py-3 font-bold">{header}</th>)}<th className="px-4 py-3">Actions</th></tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("-")} className="border-b border-border">
                {row.map((cell) => <td key={cell} className="max-w-md px-4 py-3 text-gray-600 dark:text-gray-300">{cell}</td>)}
                <td className="px-4 py-3"><button className="font-bold text-primary">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
