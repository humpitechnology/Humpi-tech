import { seedQuoteRequests } from "../lib/quote-csv";

const seedRecords = [
  {
    id: "quote-seed-001",
    fullName: "Ananya Sharma",
    email: "ananya.sharma@example.com",
    phone: "+91 98765 43210",
    service: "Web Development",
    message: "Build a responsive company website with service pages and lead capture forms.",
    submittedAt: "2026-08-01T04:30:00.000Z",
  },
  {
    id: "quote-seed-002",
    fullName: "Rahul Mehta",
    email: "rahul.mehta@example.com",
    phone: "+91 91234 56780",
    service: "AI & Automation Solutions",
    message: "Automate internal reporting workflows and connect CRM data to weekly dashboards.",
    submittedAt: "2026-08-02T06:45:00.000Z",
  },
  {
    id: "quote-seed-003",
    fullName: "Priya Nair",
    email: "priya.nair@example.com",
    phone: "+91 99887 76655",
    service: "QA Testing",
    message: "Need manual and automated QA support before launching a SaaS product.",
    submittedAt: "2026-08-03T08:15:00.000Z",
  },
];

seedQuoteRequests(seedRecords)
  .then(({ inserted, skipped }) => {
    console.log(`Seed complete. Inserted ${inserted} quote request(s), skipped ${skipped}.`);
  })
  .catch((error) => {
    console.error("Seed failed.", error);
    process.exit(1);
  });
