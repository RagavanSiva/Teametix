// Testimonials used in `sections/Testimonials.jsx` and rendered via `components/TestimonialCard.jsx`.
// Each item represents a customer quote shown in the marquee.
//
// Fields:
// - image: URL to avatar (square image works best, ~100–200px)
// - name: Display name of the person
// - handle: Optional social handle or short identifier
// - date: When the testimonial was given (display-only)
// - text: The testimonial content that appears under the header
//
// Note: For production, consider hosting images locally or on a trusted CDN.
export const testimonialsData = [
  // Sri Lanka SMB owner
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Robert Nijanthan",
    handle: "@robertnijanthan",
    date: "April 20, 2025",
    text: "Teametix made EPF/ETF payroll simple for us. We cut HR admin time by 60% and the LKR pricing fits our budget.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Nimalraj",
    handle: "@nimal",
    date: "May 10, 2025",
    text: "Leave and attendance workflows are finally organized. Managers approve on mobile, and payslips go out on time.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Anojan Vavichandran",
    handle: "@anojanvavichandran",
    date: "June 5, 2025",
    text: "We moved off spreadsheets in a week. Timesheets and approvals now sync to payroll with zero errors.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Thenushan Sritharan",
    handle: "@thenushansritharan",
    date: "June 5, 2025",
    text: "Affordable and reliable for Sri Lanka. EPF/ETF exports our accountant actually uses.",
  },
];
