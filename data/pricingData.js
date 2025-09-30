import { CheckIcon } from "lucide-react";

export const pricingData = [
  {
    title: "Starter",
    price: 49,
    features: [
      { name: "Employee directory & profiles", icon: CheckIcon },
      { name: "Basic onboarding checklists", icon: CheckIcon },
      { name: "Leave requests & approvals", icon: CheckIcon },
      { name: "Timesheets (weekly)", icon: CheckIcon },
      { name: "Email support", icon: CheckIcon },
    ],
    buttonText: "Start trial",
  },
  {
    title: "Growth",
    price: 99,
    mostPopular: true,
    features: [
      { name: "Everything in Starter", icon: CheckIcon },
      { name: "Advanced workflows & approvals", icon: CheckIcon },
      { name: "Payroll management & payslips", icon: CheckIcon },
      { name: "Leave policies & accrual rules", icon: CheckIcon },
      { name: "Timesheets by project/cost center", icon: CheckIcon },
      { name: "Priority support", icon: CheckIcon },
    ],
    buttonText: "Upgrade",
  },
  {
    title: "Enterprise",
    price: 199,
    features: [
      { name: "Everything in Growth", icon: CheckIcon },
      { name: "Custom roles & permissions", icon: CheckIcon },
      { name: "HRIS data exports & audit logs", icon: CheckIcon },
      { name: "SLA & dedicated support", icon: CheckIcon },
      { name: "Custom integrations & SSO (Okta/AAD)", icon: CheckIcon },
    ],
    buttonText: "Contact sales",
  },
];
