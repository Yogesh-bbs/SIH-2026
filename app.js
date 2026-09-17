const translations = {
  en: {
    label: "English",
    code: "en",
    speechLang: "en-IN",
    nav_citizen: "Citizen",
    nav_admin: "Admin",
    nav_university: "University",
    nav_industry: "Industry",
    hero_eyebrow: "JHARKHAND • YOUR VOICE, YOUR COMMUNITY",
    hero_title: "A centralised platform for your grievances.",
    hero_lead: "A simple place to report problems, ideas and local needs — in your language, with your voice.",
    trust_identity: '🔒 Your identity is safe and secured <span class="green-tick">✓</span>',
    step_title: "Submit your grievance",
    label_submitter_type: "I am submitting as",
    opt_citizen: "👤 Citizen",
    opt_community: "👥 Community / Group",
    opt_pri: "🏛️ Panchayati Raj (PRI)",
    label_community_name: "Community / Group Name",
    placeholder_community_name: "e.g. Mahila Samiti, Farmers Union, Youth Club…",
    label_problem: "Submit your grievance below",
    placeholder_problem: "Speak or type in your own words…\ne.g. Our village handpump has stopped working.",
    btn_voice: "🎙 AI Voice-to-Text",
    voice_status_ready: "Speak (Hindi, Santhali, English)",
    voice_status_listening: "Listening… Speak now (click again to transcribe)",
    voice_status_captured: "Voice captured ✓",
    voice_status_processing: "Transcribing audio with Sarvam AI…",
    voice_status_error: "Could not capture voice",
    voice_not_supported: "Voice input is not supported in this browser.",
    label_location: "Add location here",
    placeholder_location: "Village / town / district",
    btn_detect_location: "⌖ Use my location",
    label_media: "Add evidence",
    optional: "(optional)",
    btn_submit: "Submit problem →",
    how_eyebrow: "UNDER THE HOOD • HOW IT WORKS",
    how_title: "What happens after you submit?",
    how_desc: "A transparent 4-step pipeline that turns citizen challenges into university research and field action.",
    how_step1_title: "1. Submit your problems",
    how_step1_desc: "Speak or type in your language. Tell us what is wrong without worrying about technical terms.",
    how_step2_title: "2. AI analyses & categorizes it",
    how_step2_desc: "Our AI identifies urgency, domain (Water, Agri, Education, etc.), and location across Jharkhand.",
    how_step3_title: "3. Sent to relevant universities feed",
    how_step3_desc: "Problems are routed to specialized engineering faculties, student labs, and research teams.",
    how_step4_title: "4. They pick up & work on it",
    how_step4_desc: "Innovators take on the challenge, build prototypes, and deploy real solutions on the ground.",
    how_progress_title: "Track live solutions & progress",
    how_progress_desc: "Follow active projects, field trials, and verified community impact happening across Jharkhand districts.",
    how_progress_btn: "View Community Progress & Impact →",
    toast_loc_detected: "Location detected. You can edit it before submitting.",
    toast_loc_failed: "Could not detect location. Please enter your village or district.",
    toast_loc_prompt: "Please enter your village or district.",
    toast_problem_empty: "Please tell us what is happening first.",
    toast_problem_submitted: "Grievance submitted. AI is organizing it for review.",
    loc_detected_val: "Location detected — Jharkhand",
    btn_login: "Log In",
    btn_logout: "Log out",
    role_citizen: "Citizen",
    auth_card_prompt: "Track your grievances & get updates",
    auth_card_sub: "Log in with your mobile number to follow real-time university action.",
    auth_card_logged_title: "Logged in as",
    auth_card_logged_sub: "Submissions will be automatically linked to your citizen profile.",
    login_modal_title: "Citizen Login",
    login_modal_sub: "Sign in to track your grievances, view university responses, and receive real-time SMS updates.",
    label_phone: "Mobile Number",
    placeholder_phone: "98765 43210",
    phone_hint: "An OTP will be sent to this number for quick verification.",
    btn_send_otp: "Get Verification OTP →",
    otp_sent_msg: "OTP sent to",
    btn_change_number: "Change",
    label_otp: "Enter 4-Digit OTP",
    otp_demo_hint: "Demo OTP 1234 is pre-filled for testing.",
    btn_verify_login: "Verify & Sign In →",
    login_or: "OR",
    demo_login_title: "Quick Review / Evaluator Access:",
    login_success_toast: "Logged in successfully! Welcome back.",
    logout_success_toast: "Logged out successfully.",
    toast_problem_submitted_linked: "Grievance submitted and linked to your citizen account ✓",
    login_to_submit_title: "Log-in to submit your grievances",
    login_to_submit_desc: "Enter your phone number to receive an OTP and proceed to submit your grievance.",
    btn_login_and_proceed: "Log In & Proceed to Submit Grievance →",
    btn_resend_otp: "Resend OTP",
    demo_login_quick: "⚡ Quick 1-Click Demo Login (Ramesh Murmu)",
    guest_continue_btn: "Submit as Guest (Skip login) →",
    session_verified_badge: "Verified Citizen",
    btn_logout_switch: "Log out / Switch",
    nav_impact: "Track & Impact",
    voice_narrate_btn: "🔊 Listen",
    voice_bar_title: "Voice Assistant",
    voice_read_page: "Read Page Aloud",
    voice_stop: "Stop",
    voice_tap_mode: "Touch text to hear",
    voice_reading_active: "Reading aloud…",
    contact_eyebrow: "CITIZEN HELPDESK & SUPPORT",
    contact_title: "We are here to help you",
    contact_desc: "Connect directly with our 24/7 Citizen Support team via toll-free phone call, official email, or instant WhatsApp chat.",
    contact_call_title: "Toll-Free Helpline",
    contact_call_desc: "Speak directly to an AapV citizen assistance officer. Free for all Jharkhand mobile networks.",
    contact_call_badge: "24/7 Citizen Desk",
    contact_call_btn: "📞 Call 1800-345-2026",
    contact_email_title: "Email Helpdesk",
    contact_email_desc: "Send detailed petitions, report issues, or reach university coordination desks.",
    contact_email_badge: "Response < 24 hrs",
    contact_email_btn: "✉️ Send Email",
    contact_wa_title: "Chat on WhatsApp",
    contact_wa_desc: "Check grievance progress, send photo updates, and chat in your language directly on WhatsApp.",
    contact_wa_badge: "Instant Connect",
    contact_wa_btn: "💬 Chat on WhatsApp",
    contact_note_left: "📍 Jharkhand State Facilitation Center: Project Bhawan, Dhurwa, Ranchi — 834004",
    contact_note_right: "Helpline Active 24×7 • District facilitation offices open Mon-Sat 9 AM - 6 PM",
    impact_eyebrow: "JHARKHAND TRANSPARENCY & TRACKING",
    impact_hero_title: "Unified Grievance Tracking & Impact Observatory",
    impact_hero_lead: "From citizen voices to university engineering labs and field solutions. Track live ongoing prototypes, deployed community solutions, and open challenges across Jharkhand.",
    metric_problems_title: "Problems Submitted",
    metric_problems_sub: "Across all 24 districts",
    metric_active_title: "Active University Projects",
    metric_active_sub: "Engineering prototypes & trials",
    metric_completed_title: "Completed & Deployed",
    metric_completed_sub: "Verified community solutions",
    metric_impacted_title: "Citizens Benefited",
    metric_impacted_sub: "Directly improved lives",
    spotlight_tag: "FEATURED REAL-WORLD SOLUTION",
    spotlight_title: "Dumka Solar Arsenic & Iron Water Filtration Unit",
    spotlight_desc: "Citizens reported contaminated handpumps in Shikaripara. BIT Mesra engineers designed a low-cost graphene-sand solar filtration system. Now providing clean drinking water to 4,200 villagers daily.",
    spotlight_stat_dist: "District: <b>Dumka, Jharkhand</b>",
    spotlight_stat_team: "Team: <b>BIT Mesra Environmental Lab</b>",
    spotlight_stat_status: "Outcome: <b>100% Functional & Verified ✓</b>",
    tracking_title: "Grievance & Project Progress Tracker",
    tracking_subtitle: "Track live progress across ongoing prototypes, completed interventions, and available community challenges.",
    tab_ongoing: "Ongoing Projects",
    tab_all: "All",
    tab_completed: "Completed Projects",
    tab_available: "Available for Adoption",
    search_placeholder: "Search by Grievance ID (e.g. AAPV-2026-0842) or problem keyword…",
    filter_all_districts: "All Districts",
    filter_all_domains: "All Domains",
    filter_domain_water: "Water & Sanitation",
    filter_domain_agri: "Agriculture & Irrigation",
    filter_domain_env: "Environment & Energy",
    filter_domain_edu: "Education & Digital",
    filter_domain_health: "Healthcare & Connectivity",
    pipeline_step1: "1. Triage",
    pipeline_step2: "2. Prototype",
    pipeline_step3: "3. Field Test",
    pipeline_step4: "4. Deployed",
    partner_institution: "Partner Institution",
    state_jharkhand: "Jharkhand",
    empty_projects_title: "No matching grievances or projects found",
    empty_projects_desc: "Try adjusting your search terms or filters.",
    citizen_login_required: "Please log in with your mobile number to submit your grievance.",
    chatbot_header_title: "AapV AI Sahayak • 24/7 Progress Insights",
    chatbot_status: "Active 24/7 • Multilingual",
    chatbot_welcome: "Namaste! I am your 24/7 AI Progress Assistant. Ask me anything about the progress of your grievance, ongoing university projects, or completed solutions in your area.",
    chatbot_placeholder: "Ask about progress, grievances, or district updates… (or use mic)",
    chatbot_chip_water: "💧 Water projects in Dumka",
    chatbot_chip_completed: "✅ Show completed projects",
    chatbot_chip_ongoing: "⚙️ What are ongoing projects?",
    chatbot_chip_available: "📋 Challenges available for adoption",
    chatbot_chip_id: "🔍 Status of AAPV-2026-0842",
    floating_ask_ai: "Ask AI Assistant",
    floating_jump_section: "Jump to full chatbot section",
    floating_close_btn: "Close AI Assistant",

    // Voice Narration & Audio Reader Showcase
    audio_guide_bar_title: "Voice Narration & Audio Guide",
    audio_guide_bar_desc: "Tap any speaker icon 🔊 or click 'Read Page Aloud' to listen to this page in your language.",
    btn_read_page: "Read Page Aloud",
    btn_stop_audio: "Stop Reading",
    narrate_btn_label: "Listen",
    narrate_btn_speaking: "Stop ⏹",
    toast_audio_showcase: "Voice Narration & Audio Guide (Showcase Mode)",
    toast_audio_stopped: "Audio narration stopped.",

    // Material-Matched Contact Us Section
    contact_eyebrow: "HELP & SUPPORT • CITIZEN ASSISTANCE",
    contact_title: "Need Help? Contact AapV Citizen Support",
    contact_desc: "Connect with our dedicated grievance assistance desk via phone helpline, official email, or instant WhatsApp chat.",
    contact_call_title: "Toll-Free Helpline",
    contact_call_desc: "Speak directly with our citizen grievance officers. Available 24×7 for all Jharkhand districts.",
    contact_call_btn: "📞 Call Helpline (1800-345-6789)",
    contact_call_sub: "Toll-Free: 1800-345-6789 | Ranchi HQ: +91 651 2400000",
    contact_email_title: "Email Support Desk",
    contact_email_desc: "Send your questions, documents, or photos. Every query receives an official tracking reference.",
    contact_email_btn: "✉️ Send Official Email",
    contact_email_sub: "support-aapv@jharkhand.gov.in (Avg reply: 24-48h)",
    contact_whatsapp_title: "Chat on WhatsApp",
    contact_whatsapp_desc: "Send voice notes, photo evidence of problems, or check real-time grievance status on WhatsApp.",
    contact_whatsapp_btn: "💬 Chat on WhatsApp",
    contact_whatsapp_sub: "+91 98765 43210 (Automated & Officer Support)",

    // Portal Footer
    footer_desc: "An open digital initiative connecting citizen voices with university research & rapid solutions across Jharkhand.",
    footer_copy: "© 2026 Government of Jharkhand & Partner Universities. All rights reserved.",

    // Admin Page
    admin_eyebrow: "STATE ADMINISTRATION",
    admin_title: "Innovation command centre",
    admin_subtitle: "From community voice to measurable action.",
    btn_download_report: "Download report",
    metric_admin_submitted: "Problems submitted",
    metric_admin_validated: "Validated",
    metric_admin_active: "Active projects",
    metric_admin_completed: "Completed",
    admin_problems_domain: "Problems by domain",
    admin_last_90: "Last 90 days ▾",
    domain_healthcare: "Healthcare",
    domain_education: "Education",
    domain_agriculture: "Agriculture",
    domain_environment: "Environment",
    domain_water: "Water",
    admin_triage_queue: "AI triage queue",
    admin_pending_pill: "38 pending",
    admin_q1_title: "Handpump contamination",
    admin_q1_meta: "Giridih • Water • High",
    admin_q2_title: "Broken school toilets",
    admin_q2_meta: "Dumka • Education • Medium",
    admin_q3_title: "Crop irrigation timing",
    admin_q3_meta: "Hazaribagh • Agriculture • Low",
    btn_review: "Review",
    admin_district_activity: "District activity",
    admin_submissions_count: "2,481 submissions",
    admin_map_placeholder: "Interactive district map placeholder",

    // University Page
    univ_eyebrow: "UNIVERSITY WORKSPACE",
    univ_title: "Challenges matched to your expertise",
    univ_subtitle: "Discover local problems where your students and faculty can make a difference.",
    btn_create_project: "+ Create project",
    univ_ai_rec: "AI RECOMMENDATION",
    univ_match_heading: "4 challenges are a strong match for your institution",
    univ_match_desc: "Based on departments, research areas, faculty expertise and innovation facilities.",
    univ_avg_match: "% avg match",
    univ_p1_title: "Low-cost rural water purification",
    univ_p1_meta: "Dumka • High priority",
    univ_p1_chips: "Environmental Eng. · Chemistry · Biotech",
    univ_p2_title: "IoT soil moisture monitoring",
    univ_p2_meta: "Hazaribagh • Medium priority",
    univ_p2_chips: "Electronics · IoT · Agriculture",
    univ_p3_title: "Village plastic waste collection",
    univ_p3_meta: "Ranchi • High priority",
    univ_p3_chips: "Civil Eng. · Environment · Data",
    btn_review_challenge: "Review challenge",
    univ_active_title: "Active project · Rural Water Purification",
    univ_active_pill: "Prototype testing",
    univ_mentor_label: "Mentor",
    univ_students_label: "4 students",
    univ_industry_partner: "Industry partner",
    step_analysis: "Problem analysis",
    step_design: "Prototype design",
    step_testing: "Prototype testing",
    step_deployment: "Field deployment",
    step_impact: "Impact assessment",

    // Industry Page
    ind_eyebrow: "INDUSTRY & CSR",
    ind_title: "Find problems worth solving.",
    ind_subtitle: "Support credible projects with funding, expertise, equipment or field access.",
    btn_my_commitments: "My commitments",
    ind_search_placeholder: "Search projects, technologies, districts…",
    btn_all_domains: "All domains ▾",
    btn_support_needed: "Support needed ▾",
    ind_req_total: "total requirement",
    btn_i_can_help: "I can help",
    ind_impact_title: "Your impact",
    ind_stat_committed: "committed",
    ind_stat_supported: "projects supported",
    ind_stat_districts: "districts reached",
    ind_stat_people: "people impacted",

    // University Why Help Us
    univ_why_eyebrow: "WHY PARTICIPATE? • ACADEMIC & CAREER ADVANTAGE",
    univ_why_title: "Why bring your students to AapV? Here's what your campus gains.",
    univ_why_subtitle: "We know faculty time is stretched and students already have heavy academic workloads. AapV isn't another hackathon or theoretical assignment. It connects your campus directly with funded challenges that satisfy government mandates, unlock serious research grants, and get your students hired.",
    univ_why_c1_tag: "ACADEMIC MANDATE",
    univ_why_c1_title: "NEP 2020 Compliance, Built Right In",
    univ_why_c1_desc: "National Education Policy 2020 explicitly requires colleges to provide students with experiential learning and community engagement for academic credit. Instead of scrambling to invent artificial coursework, your departments can use live AapV civic challenges as accredited semester capstones and multidisciplinary team credits with zero guesswork.",
    univ_why_c2_tag: "RESEARCH FUNDING",
    univ_why_c2_title: "Unlocking Government Research Grants (DST & MeitY)",
    univ_why_c2_desc: "Grant screening committees routinely reject purely theoretical proposals. When your professors apply to DST, MeitY, or CSIR with a project that already has verified community demand and confirmed industry co-sponsorship on AapV, your funding odds skyrocket. Real field data makes your grant proposals stand out.",
    univ_why_c3_tag: "STUDENT PLACEMENTS",
    univ_why_c3_title: "Differentiated Portfolios: Real Deployments, Not Clones",
    univ_why_c3_desc: "Tech recruiters are tired of seeing identical e-commerce clones or to-do lists on student resumes. When your graduates interview with a portfolio showcasing an IoT water sensor deployed in Dumka or a plastic recovery network serving 3,000 villagers, they don't just pass interviews — they negotiate premium starting packages.",
    univ_why_c4_tag: "RANKING BOOST",
    univ_why_c4_title: "Primary Research Data, Patents & NIRF Ranking Boost",
    univ_why_c4_desc: "Grassroots challenges provide unique, unpublished regional datasets that you cannot get from textbooks. Faculty and research scholars can publish peer-reviewed papers, file practical utility patents, and significantly improve the university's NAAC accreditation and NIRF ranking scores.",
    univ_why_cta_text: "Ready to empower your students and faculty with accredited real-world challenges?",
    univ_why_cta_btn: "Register Your University Lab",

    // Industry Why Help Us
    ind_why_eyebrow: "WHY PARTNER WITH AAPV? • MEASURABLE ROI",
    ind_why_title: "Why help solve grassroots problems? Let's talk business.",
    ind_why_subtitle: "We know businesses run on real returns, not just goodwill or corporate buzzwords. Sponsoring community solutions through AapV isn't just about charity — it's a strategic investment that directly lowers your hiring costs, tests your products in real markets, and earns public trust.",
    ind_why_c1_tag: "TALENT PIPELINE",
    ind_why_c1_title: "Early Talent Scouting: Skip the Hiring Guesswork",
    ind_why_c1_desc: "Standard campus interviews test memorization, not execution. When you sponsor a live community challenge, you watch engineering and tech students solve tough, messy problems in real time. You get first pick of battle-tested young talent who already know your stack, drastically cutting your recruitment agency fees and 6-month onboarding cycles.",
    ind_why_c2_tag: "MARKET VALIDATION",
    ind_why_c2_title: "Real Rural Market Testing: A Free Ground Sandbox",
    ind_why_c2_desc: "Building for Bharat from an AC office in Bengaluru or Gurugram rarely works. If you're developing agritech, solar microgrids, EV battery systems, or sanitation hardware, Jharkhand's districts offer an unmatched real-world testbed. You get rapid, honest field feedback directly from actual end-users before sinking millions into mass manufacturing.",
    ind_why_c3_tag: "CSR WITH ROI",
    ind_why_c3_title: "Auditable CSR: 100% Transparent, Board-Ready Impact",
    ind_why_c3_desc: "Mandatory CSR spending often disappears into vague intermediary reports. With AapV, every rupee is tracked on an open, geo-tagged dashboard. You see the exact hand-pump repaired, solar unit deployed, or telemetry sensor installed — complete with timestamped photos, citizen feedback, and transparent board-ready compliance.",
    ind_why_c4_tag: "STRATEGIC TRUST",
    ind_why_c4_title: "Community Goodwill & Smoother Regional Approvals",
    ind_why_c4_desc: "Operating in industrial, mining, or manufacturing belts requires authentic social license and community trust. Solving urgent local grievances alongside district authorities builds lasting goodwill with local communities and state departments, preventing friction and speeding up regional approvals.",
    ind_why_cta_text: "Ready to see measurable business returns while solving critical local challenges?",
    ind_why_cta_btn: "Partner With Us Today",

    // University Auth
    univ_login_btn: "Faculty & Lab Login",
    univ_login_title: "University Workspace Login",
    univ_login_sub: "Sign in with your institutional credentials to claim citizen challenges, access research grants, and submit prototype milestones.",
    univ_label_email: "Institutional Email / Faculty ID",
    univ_label_institution: "Select Institution",
    univ_label_password: "Password / Security Key",
    btn_univ_signin: "Sign In to University Workspace →",

    // Industry Auth
    ind_login_btn: "Industry & CSR Login",
    ind_login_title: "Industry & CSR Partner Login",
    ind_login_sub: "Sign in to fund verified community prototypes, offer technical mentorship, and track CSR impact across Jharkhand.",
    ind_label_email: "Corporate Work Email",
    ind_label_company: "Company / CSR Foundation",
    ind_label_password: "Corporate Access Key",
    btn_ind_signin: "Sign In to Industry Portal →",

    // Admin Auth
    admin_login_btn: "Admin Officer Login",
    admin_login_title: "State Administration Login",
    admin_login_sub: "Restricted command centre access for Jharkhand State Administration, departmental secretaries, and innovation taskforce officers.",
    admin_label_email: "Official Gov Email / Officer ID",
    admin_label_dept: "Department / Agency",
    admin_label_password: "Administrative Security PIN",
    btn_admin_signin: "Access Command Centre →",

    // Theme Mode
    theme_dark: "Dark",
    theme_light: "Light",
    theme_toggle_title: "Switch to Dark/Light mode",

    // 404 Error Page
    page_not_found_title: "404 • Page Not Found",
    page_not_found_desc: "The page you are looking for does not exist, has been removed, or has moved.",
    btn_back_home: "Back to Citizen Home",

    // Mobile Portal Menu
    portal_sub_citizen: "Grievance & Redressal",
    portal_sub_impact: "Live Metrics & Progress",
    portal_sub_admin: "Panchayat Administration",
    portal_sub_university: "Academic & Research Hub",
    portal_sub_industry: "CSR & Private Sector",
    mobile_menu_title: "All Portals",

    // Admin Intelligence & Triage
    admin_report_title: "Grievance & Impact Intelligence Report",
    admin_report_sub: "Export verified datasets covering 2,481 submissions, 24 districts, and cross-departmental resolution metrics for Q1-Q3 2026.",
    admin_report_preview_title: "Dataset Summary (Live Synced)",
    admin_rep_records: "Records",
    admin_rep_validated: "Validated",
    admin_rep_districts: "Districts",
    btn_export_csv: "Download Full CSV Dataset (.csv)",
    btn_print_summary: "Print / Save Executive PDF Briefing",
    triage_lbl_priority: "Severity / Priority",
    triage_lbl_dept: "Dispatch Destination",
    triage_lbl_notes: "Administrative Officer Notes / Action Directive",
    btn_cancel: "Cancel",
    btn_confirm_triage: "Approve & Dispatch Ticket ✓",

    // University Sandbox & Challenges
    univ_modal_badge: "University Innovation Lab • Academic Sandbox",
    univ_create_title: "Launch Grassroots R&D Project",
    univ_create_sub: "Register a faculty-led or student engineering project linked to verified Jharkhand community problems for NEP credit and corporate CSR co-funding.",
    univ_lbl_proj_title: "Project Title *",
    univ_ph_proj_title: "e.g., Solar Powered Flour Mill Automation",
    univ_lbl_college: "University / Institute *",
    univ_ph_college: "e.g., BIT Mesra / NIT Jamshedpur",
    univ_lbl_lead: "Faculty Mentor / Student Lead *",
    univ_ph_lead: "e.g., Dr. P. Kumar / Ananya Roy",
    univ_lbl_challenge: "Linked Grassroots Challenge",
    univ_lbl_support_req: "Required External Support",
    support_funding: "Seed Grant / Funding",
    support_equipment: "Hardware / Sensors",
    support_field: "Field Testing Access",
    support_mfg: "Prototype Fabrication & Tooling",
    support_mentorship: "Corporate Mentorship",
    univ_lbl_abstract: "Technical Methodology Abstract *",
    univ_ph_abstract: "Describe the prototype architecture, key technological components, and expected village impact…",
    btn_submit_proj: "Register Project for CSR Match ✓",
    btn_print_dossier: "Print / Save Dossier",
    btn_claim_challenge: "Claim Challenge for Lab",

    // Industry & CSR
    filter_all_support: "All Support Needed",
    ind_no_match_title: "No projects match your filter criteria",
    ind_no_match_sub: "Try selecting \"All Domains\" or clearing search keywords.",
    ind_modal_badge: "Corporate CSR & Innovation Co-Funding",
    ind_pledge_title: "Partner with Grassroots Innovation",
    ind_lbl_org: "Enterprise / Organization Name *",
    ind_ph_org: "e.g., Tata Steel CSR Foundation / JSW",
    ind_lbl_rep: "Representative & Title *",
    ind_ph_rep: "e.g., Rajesh Sharma, CSR Lead",
    ind_lbl_email: "Corporate Email Address *",
    ind_ph_email: "e.g., csr@tatasteel.com",
    ind_lbl_phone: "Official Phone / WhatsApp *",
    ind_ph_phone: "e.g., +91 98765 43210",
    ind_lbl_support_types: "Support Contribution Type(s) *",
    ind_lbl_grant_amount: "Proposed Grant Value (Optional, ₹ INR)",
    ind_ph_amount: "e.g., ₹2,00,000 or equipment equivalent",
    ind_lbl_notes: "Collaboration Scope & Special Terms",
    ind_ph_notes: "Briefly specify milestones, disbursement conditions, or mentorship schedule…",
    btn_confirm_pledge: "Confirm CSR Support Pledge ✓",
    ind_commitments_badge: "Corporate Registry • Active CSR Pledges",
    ind_commitments_title: "My Active CSR Commitments",
    ind_commitments_sub: "Review and track your company's official problem sponsorships and university partnerships.",
    btn_close: "Close",
    btn_print_csr_cert: "Print CSR Impact Certificate"
  },
  hi: {
    label: "हिन्दी",
    code: "hi",
    speechLang: "hi-IN",
    nav_citizen: "नागरिक",
    nav_impact: "प्रगति और प्रभाव",
    nav_admin: "प्रशासन",
    nav_university: "विश्वविद्यालय",
    nav_industry: "उद्योग",
    hero_eyebrow: "झारखंड • आपकी आवाज़, आपका समुदाय",
    hero_title: "आपकी शिकायतों और समस्याओं का एक केंद्रीकृत मंच।",
    hero_lead: "अपनी भाषा और आवाज़ में समस्याओं, विचारों और स्थानीय ज़रूरतों को साझा करने का सरल माध्यम।",
    trust_identity: '🔒 आपकी पहचान पूरी तरह सुरक्षित है <span class="green-tick">✓</span>',
    step_title: "अपनी शिकायत दर्ज करें",
    label_submitter_type: "मैं इस रूप में आवेदन कर रहा/रही हूँ",
    opt_citizen: "👤 नागरिक",
    opt_community: "👥 समुदाय / समूह",
    opt_pri: "🏛️ पंचायती राज (PRI)",
    label_community_name: "समुदाय / समूह का नाम",
    placeholder_community_name: "जैसे: महिला समिति, कृषक समूह, युवा मंडल…",
    label_problem: "अपनी शिकायत नीचे लिखें",
    placeholder_problem: "अपने शब्दों में बोलें या लिखें…\nजैसे: हमारे गांव का चापाकल (हैंडपंप) खराब हो गया है।",
    btn_voice: "🎙 AI वॉइस-टू-टेक्स्ट",
    voice_status_ready: "बोलें (हिन्दी, संताली, English)",
    voice_status_listening: "सुन रहे हैं… बोलें (अनुवाद के लिए पुनः दबाएं)",
    voice_status_captured: "आवाज़ दर्ज हो गई ✓",
    voice_status_processing: "Sarvam AI द्वारा आवाज़ का अनुवाद किया जा रहा है…",
    voice_status_error: "आवाज़ दर्ज नहीं हो सकी",
    voice_not_supported: "इस ब्राउज़र में आवाज़ इनपुट समर्थित नहीं है।",
    label_location: "स्थान यहाँ जोड़ें",
    placeholder_location: "गांव / कस्बा / ज़िला",
    btn_detect_location: "⌖ मेरा स्थान उपयोग करें",
    label_media: "तस्वीर या वीडियो जोड़ें",
    optional: "(वैकल्पिक)",
    btn_submit: "समस्या दर्ज करें →",
    how_eyebrow: "प्रक्रिया • यह कैसे काम करता है",
    how_title: "समस्या दर्ज करने के बाद क्या होता है?",
    how_desc: "एक पारदर्शी 4-चरणीय प्रक्रिया जो नागरिकों की समस्याओं को विश्वविद्यालयी शोध और ज़मीनी कार्रवाई में बदलती है।",
    how_step1_title: "1. अपनी समस्या दर्ज करें",
    how_step1_desc: "अपनी भाषा में बोलें या लिखें। बिना किसी तकनीकी फॉर्म या झंझट के अपनी परेशानी साझा करें।",
    how_step2_title: "2. AI विश्लेषण और वर्गीकरण",
    how_step2_desc: "AI तुरंत समस्या की गंभीरता, विषय (जल, कृषि, शिक्षा आदि) और ज़िले का विश्लेषण करता है।",
    how_step3_title: "3. विश्वविद्यालयों के फीड में प्रेषण",
    how_step3_desc: "समस्या सीधे संबंधित इंजीनियरिंग कॉलेजों, अनुसंधान प्रयोगशालाओं और छात्र टीमों तक पहुँचती है।",
    how_step4_title: "4. टीमें समाधान पर काम करती हैं",
    how_step4_desc: "छात्र और विशेषज्ञ चुनौती स्वीकार करते हैं, प्रोटोटाइप बनाते हैं और ज़मीन पर समाधान लागू करते हैं।",
    how_progress_title: "प्रगति और समाधान ट्रैक करें",
    how_progress_desc: "देखें कि आपकी समस्या पर क्या कार्रवाई हुई, कौन सी टीमें काम कर रही हैं और क्या परिणाम आए।",
    how_progress_btn: "प्रगति और प्रभाव देखें (Impact) →",
    toast_loc_detected: "स्थान मिल गया। सबमिट करने से पहले आप इसे बदल सकते हैं।",
    toast_loc_failed: "स्थान का पता नहीं चला। कृपया गांव या जिला लिखें।",
    toast_loc_prompt: "कृपया अपना गांव या जिला दर्ज करें।",
    toast_problem_empty: "कृपया पहले बताएं कि क्या समस्या आ रही है।",
    toast_problem_submitted: "शिकायत दर्ज हुई। AI इसे समीक्षा के लिए व्यवस्थित कर रहा है।",
    loc_detected_val: "स्थान निर्धारित — झारखंड",
    btn_login: "लॉग इन",
    btn_logout: "लॉग आउट",
    role_citizen: "नागरिक",
    auth_card_prompt: "अपनी शिकायतों को ट्रैक करें और अपडेट पाएं",
    auth_card_sub: "विश्वविद्यालयों की कार्रवाई देखने के लिए अपने मोबाइल नंबर से लॉग इन करें।",
    auth_card_logged_title: "के रूप में लॉग इन हैं:",
    auth_card_logged_sub: "दर्ज की गई शिकायतें सीधे आपके नागरिक प्रोफ़ाइल से जुड़ेंगी।",
    login_modal_title: "नागरिक लॉगिन",
    login_modal_sub: "अपनी दर्ज शिकायतों की स्थिति जांचें, विश्वविद्यालय टीमों से जुड़ें और सीधे अपडेट पाएं।",
    label_phone: "मोबाइल नंबर",
    placeholder_phone: "98765 43210",
    phone_hint: "त्वरित सत्यापन के लिए इस नंबर पर एक OTP भेजा जाएगा।",
    btn_send_otp: "सत्यापन OTP प्राप्त करें →",
    otp_sent_msg: "OTP भेजा गया:",
    btn_change_number: "बदलें",
    label_otp: "4 अंकों का OTP दर्ज करें",
    otp_demo_hint: "परीक्षण के लिए डेमो OTP 1234 पहले से भरा है।",
    btn_verify_login: "सत्यापित करें और लॉग इन करें →",
    login_or: "या",
    demo_login_title: "त्वरित समीक्षा / डेमो लॉगिन:",
    login_success_toast: "सफलतापूर्वक लॉग इन हुआ! आपका स्वागत है।",
    logout_success_toast: "सफलतापूर्वक लॉग आउट किया गया।",
    toast_problem_submitted_linked: "शिकायत दर्ज हुई और आपके नागरिक खाते से जुड़ गई ✓",
    login_to_submit_title: "अपनी शिकायत दर्ज करने के लिए लॉग इन करें",
    login_to_submit_desc: "OTP प्राप्त करने और अपनी शिकायत दर्ज करने के लिए अपना मोबाइल नंबर दर्ज करें।",
    btn_login_and_proceed: "लॉग इन करें और शिकायत दर्ज करने के लिए आगे बढ़ें →",
    btn_resend_otp: "पुनः OTP भेजें",
    demo_login_quick: "⚡ त्वरित 1-क्लिक डेमो लॉगिन (रमेश मुर्मू)",
    guest_continue_btn: "अतिथि के रूप में आगे बढ़ें (लॉगिन छोड़ें) →",
    session_verified_badge: "सत्यापित नागरिक",
    btn_logout_switch: "लॉग आउट / बदलें",
    voice_narrate_btn: "🔊 सुनें",
    voice_bar_title: "आवाज़ सहायक",
    voice_read_page: "पूरा पृष्ठ पढ़कर सुनाएं",
    voice_stop: "रोकें",
    voice_tap_mode: "किसी भी लेख को छूकर सुनें",
    voice_reading_active: "पढ़कर सुनाया जा रहा है…",
    contact_eyebrow: "नागरिक सहायता और संपर्क",
    contact_title: "हम आपकी सहायता के लिए सदैव तत्पर हैं",
    contact_desc: "24/7 नागरिक सहायता टीम से टोल-फ्री फोन कॉल, आधिकारिक ईमेल या व्हाट्सएप चैट के माध्यम से तुरंत जुड़ें।",
    contact_call_title: "टोल-फ्री हेल्पलाइन",
    contact_call_desc: "AapV नागरिक सहायता अधिकारी से सीधे बात करें। झारखंड के सभी निवासियों के लिए निःशुल्क।",
    contact_call_badge: "24/7 उपलब्ध",
    contact_call_btn: "📞 कॉल करें 1800-345-2026",
    contact_email_title: "ईमेल सहायता",
    contact_email_desc: "विस्तृत शिकायत, फोटो, या विश्वविद्यालय समन्वय संबंधी प्रश्न ईमेल द्वारा भेजें।",
    contact_email_badge: "24 घंटे में समाधान",
    contact_email_btn: "✉️ ईमेल भेजें",
    contact_wa_title: "व्हाट्सएप पर चैट करें",
    contact_wa_desc: "शिकायत की स्थिति जांचें, फोटो भेजें और अपनी भाषा में व्हाट्सएप पर तुरंत बात करें।",
    contact_wa_badge: "त्वरित संपर्क",
    contact_wa_btn: "💬 व्हाट्सएप पर चैट करें",
    contact_note_left: "📍 राज्य सुविधा केंद्र: प्रोजेक्ट भवन, धुर्वा, रांची, झारखंड — 834004",
    contact_note_right: "हेल्पलाइन 24×7 सक्रिय • जिला सुविधा केंद्र सोमवार से शनिवार सुबह 9 बजे से शाम 6 बजे तक खुले हैं",
    impact_eyebrow: "झारखंड • पारदर्शिता और ज़मीनी प्रगति",
    impact_hero_title: "केंद्रीकृत शिकायत ट्रैकिंग एवं प्रभाव वेधशाला",
    impact_hero_lead: "नागरिकों की आवाज़ से लेकर विश्वविद्यालय की प्रयोगशालाओं और ज़मीनी समाधानों तक। चल रही परियोजनाओं, पूर्ण समाधानों और उपलब्ध चुनौतियों को ट्रैक करें।",
    metric_problems_title: "कुल दर्ज समस्याएं",
    metric_problems_sub: "झारखंड के सभी 24 जिलों से",
    metric_active_title: "सक्रिय विश्वविद्यालय परियोजनाएं",
    metric_active_sub: "इंजीनियरिंग प्रोटोटाइप और परीक्षण",
    metric_completed_title: "पूर्ण और सत्यापित समाधान",
    metric_completed_sub: "गांवों में स्थापित एवं चालू",
    metric_impacted_title: "लाभान्वित नागरिक",
    metric_impacted_sub: "प्रत्यक्ष रूप से बेहतर हुआ जीवन",
    spotlight_tag: "सत्यापित ज़मीनी सफलता की कहानी",
    spotlight_title: "दुमका सोलर आर्सेनिक एवं आयरन जल शोधन संयंत्र",
    spotlight_desc: "शिकारीपाड़ा के ग्रामीणों ने चापाकल में दूषित पानी की सूचना दी। बीआईटी मेसरा के शोधकर्ताओं ने कम लागत वाला सौर जल शोधक तैयार कर स्थापित किया। अब प्रतिदिन 4,200 ग्रामीणों को स्वच्छ पेयजल मिल रहा है।",
    spotlight_stat_dist: "ज़िला: <b>दुमका, झारखंड</b>",
    spotlight_stat_team: "टीम: <b>बीआईटी मेसरा पर्यावरण लैब</b>",
    spotlight_stat_status: "स्थिति: <b>100% संचालित एवं सत्यापित ✓</b>",
    tracking_title: "शिकायत एवं परियोजना प्रगति ट्रैकर",
    tracking_subtitle: "चल रहे प्रोटोटाइप, पूर्ण हस्तक्षेपों और खुली सामुदायिक चुनौतियों की वास्तविक समय की प्रगति देखें।",
    tab_ongoing: "चल रही परियोजनाएं (Ongoing)",
    tab_all: "सभी",
    tab_completed: "पूर्ण परियोजनाएं (Completed)",
    tab_available: "गोद लेने हेतु उपलब्ध (Available)",
    search_placeholder: "शिकायत संख्या (उदा. AAPV-2026-0842) या कीवर्ड से खोजें…",
    filter_all_districts: "सभी ज़िले",
    filter_all_domains: "सभी क्षेत्र",
    filter_domain_water: "जल एवं स्वच्छता",
    filter_domain_agri: "कृषि एवं सिंचाई",
    filter_domain_env: "पर्यावरण एवं ऊर्जा",
    filter_domain_edu: "शिक्षा एवं डिजिटल",
    filter_domain_health: "स्वास्थ्य एवं संपर्क",
    pipeline_step1: "1. प्राथमिकता निर्धारण",
    pipeline_step2: "2. प्रोटोटाइप",
    pipeline_step3: "3. ज़मीनी परीक्षण",
    pipeline_step4: "4. स्थापित एवं समर्पित",
    partner_institution: "सहयोगी संस्थान",
    state_jharkhand: "झारखंड",
    empty_projects_title: "कोई मेल खाती शिकायत या परियोजना नहीं मिली",
    empty_projects_desc: "कृपया अपने खोज शब्द या फ़िल्टर बदलकर पुनः प्रयास करें।",
    citizen_login_required: "कृपया अपनी शिकायत दर्ज करने हेतु अपने मोबाइल नंबर से लॉगिन करें।",
    chatbot_header_title: "AapV AI सहायक • 24/7 प्रगति जानकारी",
    chatbot_status: "24/7 सक्रिय • बहुभाषी",
    chatbot_welcome: "नमस्ते! मैं आपका 24/7 AI प्रगति सहायक हूँ। अपनी शिकायत की स्थिति, विश्वविद्यालय के काम या अपने ज़िले में पूर्ण हुई परियोजनाओं के बारे में पूछें।",
    chatbot_placeholder: "प्रगति, शिकायत या ज़िले के बारे में पूछें… (या माइक दबाएं)",
    chatbot_chip_water: "💧 दुमका में जल परियोजनाओं की स्थिति",
    chatbot_chip_completed: "✅ पूर्ण हो चुकी परियोजनाएं दिखाएं",
    chatbot_chip_ongoing: "⚙️ चल रही विश्वविद्यालय परियोजनाएं क्या हैं?",
    chatbot_chip_available: "📋 विश्वविद्यालयों के लिए उपलब्ध समस्याएं",
    chatbot_chip_id: "🔍 AAPV-2026-0842 की स्थिति जांचें",
    floating_ask_ai: "एआई सहायक से पूछें",
    floating_jump_section: "पूर्ण चैटबॉट अनुभाग पर जाएं",
    floating_close_btn: "एआई सहायक बंद करें",

    // Voice Narration & Audio Reader Showcase
    audio_guide_bar_title: "वॉइस नैरेशन और ऑडियो गाइड",
    audio_guide_bar_desc: "किसी भी स्पीकर 🔊 पर टैप करें या अपनी भाषा में सुनने के लिए 'पेज सुनें' पर क्लिक करें।",
    btn_read_page: "पूरा पेज सुनें",
    btn_stop_audio: "रोकें",
    narrate_btn_label: "सुनें",
    narrate_btn_speaking: "रोकें ⏹",
    toast_audio_showcase: "ऑडियो गाइड (शोकेस मोड): सामग्री हाइलाइट की गई।",
    toast_audio_stopped: "ऑडियो नैरेशन रुका।",

    // Material-Matched Contact Us Section
    contact_eyebrow: "सहायता और सहयोग • नागरिक सहायता",
    contact_title: "सहायता चाहिए? AapV नागरिक सहायता से संपर्क करें",
    contact_desc: "फोन हेल्पलाइन, आधिकारिक ईमेल या त्वरित व्हाट्सएप चैट के माध्यम से हमारे समर्पित शिकायत सहायता डेस्क से जुड़ें।",
    contact_call_title: "टोल-फ्री हेल्पलाइन",
    contact_call_desc: "हमारे नागरिक शिकायत अधिकारियों से सीधे बात करें। झारखंड के सभी जिलों के लिए 24×7 उपलब्ध।",
    contact_call_btn: "📞 हेल्पलाइन पर कॉल करें (1800-345-6789)",
    contact_call_sub: "टोल-फ्री: 1800-345-6789 | रांची मुख्यालय: +91 651 2400000",
    contact_email_title: "ईमेल सहायता डेस्क",
    contact_email_desc: "अपने प्रश्न, दस्तावेज़ या तस्वीरें भेजें। प्रत्येक प्रश्न को आधिकारिक ट्रैकिंग संदर्भ मिलता है।",
    contact_email_btn: "✉️ आधिकारिक ईमेल भेजें",
    contact_email_sub: "support-aapv@jharkhand.gov.in (औसत उत्तर: 24-48 घंटे)",
    contact_whatsapp_title: "व्हाट्सएप पर चैट करें",
    contact_whatsapp_desc: "व्हाट्सएप पर वॉयस नोट्स, फोटो साक्ष्य भेजें या वास्तविक समय स्थिति जांचें।",
    contact_whatsapp_btn: "💬 व्हाट्सएप पर चैट करें",
    contact_whatsapp_sub: "+91 98765 43210 (स्वचालित व अधिकारी सहायता)",

    // Portal Footer
    footer_desc: "झारखंड भर में नागरिकों की आवाज़ को विश्वविद्यालय अनुसंधान और त्वरित समाधानों से जोड़ने वाली खुली डिजिटल पहल।",
    footer_copy: "© 2026 झारखंड सरकार एवं भागीदार विश्वविद्यालय। सर्वाधिकार सुरक्षित।",

    // Admin Page
    admin_eyebrow: "राज्य प्रशासन",
    admin_title: "नवाचार कमांड सेंटर",
    admin_subtitle: "सामुदायिक आवाज़ से मापने योग्य कार्रवाई तक।",
    btn_download_report: "रिपोर्ट डाउनलोड करें",
    metric_admin_submitted: "समस्याएं दर्ज",
    metric_admin_validated: "सत्यापित",
    metric_admin_active: "सक्रिय परियोजनाएं",
    metric_admin_completed: "पूर्ण",
    admin_problems_domain: "क्षेत्र अनुसार समस्याएं",
    admin_last_90: "पिछले 90 दिन ▾",
    domain_healthcare: "स्वास्थ्य सेवा",
    domain_education: "शिक्षा",
    domain_agriculture: "कृषि",
    domain_environment: "पर्यावरण",
    domain_water: "जल संसाधन",
    admin_triage_queue: "AI प्राथमिकता कतार",
    admin_pending_pill: "38 लंबित",
    admin_q1_title: "हैंडपंप संदूषण",
    admin_q1_meta: "गिरिडीह • जल • उच्च",
    admin_q2_title: "विद्यालय शौचालय क्षति",
    admin_q2_meta: "दुमका • शिक्षा • मध्यम",
    admin_q3_title: "फसल सिंचाई समय निर्धारण",
    admin_q3_meta: "हजारीबाग • कृषि • निम्न",
    btn_review: "समीक्षा",
    admin_district_activity: "जिलावार गतिविधि",
    admin_submissions_count: "2,481 प्रविष्टियां",
    admin_map_placeholder: "इंटरएक्टिव जिला मानचित्र",

    // University Page
    univ_eyebrow: "विश्वविद्यालय कार्यक्षेत्र",
    univ_title: "आपकी विशेषज्ञता से मेल खाती चुनौतियाँ",
    univ_subtitle: "ऐसी स्थानीय समस्याओं को खोजें जहाँ आपके छात्र व शिक्षक बदलाव ला सकते हैं।",
    btn_create_project: "+ नया प्रोजेक्ट बनाएं",
    univ_ai_rec: "AI अनुशंसा",
    univ_match_heading: "4 चुनौतियां आपके संस्थान के लिए सटीक मेल हैं",
    univ_match_desc: "विभागों, अनुसंधान क्षेत्रों, संकाय विशेषज्ञता और नवाचार सुविधाओं के आधार पर।",
    univ_avg_match: "% औसत मेल",
    univ_p1_title: "कम लागत वाला ग्रामीण जल शोधन",
    univ_p1_meta: "दुमका • उच्च प्राथमिकता",
    univ_p1_chips: "पर्यावरण इंजी. · रसायन विज्ञान · बायोटेक",
    univ_p2_title: "IoT मृदा नमी निगरानी",
    univ_p2_meta: "हजारीबाग • मध्यम प्राथमिकता",
    univ_p2_chips: "इलेक्ट्रॉनिक्स · IoT · कृषि",
    univ_p3_title: "ग्रामीण प्लास्टिक कचरा संग्रहण",
    univ_p3_meta: "रांची • उच्च प्राथमिकता",
    univ_p3_chips: "सिविल इंजी. · पर्यावरण · डेटा",
    btn_review_challenge: "चुनौती की समीक्षा करें",
    univ_active_title: "सक्रिय प्रोजेक्ट · ग्रामीण जल शोधन",
    univ_active_pill: "प्रोटोटाइप परीक्षण",
    univ_mentor_label: "परामर्शदाता",
    univ_students_label: "4 छात्र",
    univ_industry_partner: "उद्योग भागीदार",
    step_analysis: "समस्या विश्लेषण",
    step_design: "प्रोटोटाइप डिज़ाइन",
    step_testing: "प्रोटोटाइप परीक्षण",
    step_deployment: "क्षेत्रीय स्थापना",
    step_impact: "प्रभाव मूल्यांकन",

    // Industry Page
    ind_eyebrow: "उद्योग एवं सीएसआर (CSR)",
    ind_title: "सुलझाने योग्य सार्थक समस्याएं खोजें।",
    ind_subtitle: "फंडिंग, विशेषज्ञता, उपकरण या फील्ड सहयोग के साथ परियोजनाओं को सशक्त बनाएं।",
    btn_my_commitments: "मेरी प्रतिबद्धताएं",
    ind_search_placeholder: "परियोजनाएं, तकनीक, जिले खोजें…",
    btn_all_domains: "सभी क्षेत्र ▾",
    btn_support_needed: "अपेक्षित सहयोग ▾",
    ind_req_total: "कुल आवश्यकता",
    btn_i_can_help: "मैं मदद कर सकता हूँ",
    ind_impact_title: "आपका प्रभाव",
    ind_stat_committed: "प्रतिबद्ध फंड",
    ind_stat_supported: "समर्थित परियोजनाएं",
    ind_stat_districts: "पहुंचे जिले",
    ind_stat_people: "लाभान्वित नागरिक",

    // University Why Help Us
    univ_why_eyebrow: "सहभागिता क्यों करें? • शैक्षणिक एवं करियर लाभ",
    univ_why_title: "अपने छात्रों को AapV से क्यों जोड़ें? आपके संस्थान को क्या मिलेगा।",
    univ_why_subtitle: "हम जानते हैं कि प्रोफेसरों का समय सीमित है और छात्रों पर पढ़ाई का भार अधिक रहता है। AapV कोई सामान्य हैकथॉन या सैद्धांतिक असाइनमेंट नहीं है। यह आपके परिसर को सीधे उन वित्तपोषित चुनौतियों से जोड़ता है जो सरकारी नियमों को पूरा करती हैं, अनुसंधान अनुदान दिलाती हैं और छात्रों को बेहतर प्लेसमेंट दिलाती हैं।",
    univ_why_c1_tag: "शैक्षणिक अधिदेश",
    univ_why_c1_title: "NEP 2020 अनुपालन, सीधे पाठ्यक्रम में समाहित",
    univ_why_c1_desc: "राष्ट्रीय शिक्षा नीति (NEP 2020) स्पष्ट रूप से अनिवार्य करती है कि छात्रों को अकादमिक क्रेडिट के लिए व्यावहारिक, बहुविषयक एवं सामुदायिक अनुभव दिया जाए। काल्पनिक प्रोजेक्ट बनाने के बजाय, आपके विभाग AapV की वास्तविक नागरिक चुनौतियों को मान्यता प्राप्त सेमेस्टर कैपस्टोन और टीम क्रेडिट के रूप में आसानी से उपयोग कर सकते हैं।",
    univ_why_c2_tag: "अनुसंधान अनुदान",
    univ_why_c2_title: "सरकारी अनुसंधान अनुदान (DST और MeitY) की प्राप्ति",
    univ_why_c2_desc: "अनुदान समितियां विशुद्ध रूप से सैद्धांतिक प्रस्तावों को अस्वीकार कर देती हैं। जब आपके प्रोफेसर DST, MeitY या CSIR में ऐसे प्रोजेक्ट के साथ आवेदन करते हैं जिसे AapV पर सत्यापित सामुदायिक मांग और उद्योग सह-वित्तपोषण प्राप्त है, तो अनुदान स्वीकृति की संभावना कई गुना बढ़ जाती है।",
    univ_why_c3_tag: "छात्र प्लेसमेंट",
    univ_why_c3_title: "विशिष्ट पोर्टफोलियो: असली तैनाती, न कि क्लोन प्रोजेक्ट",
    univ_why_c3_desc: "रिक्रूटर छात्रों के बायोडाटा पर एक जैसी ई-कॉमर्स वेबसाइट या बुनियादी ऐप्स देखकर थक चुके हैं। जब आपके छात्र दुमका में तैनात IoT जल सेंसर या 3,000 ग्रामीणों की सेवा करने वाले अपशिष्ट नेटवर्क जैसे वास्तविक प्रोजेक्ट दिखाते हैं, तो वे न केवल इंटरव्यू पास करते हैं बल्कि उत्कृष्ट पैकेज हासिल करते हैं।",
    univ_why_c4_tag: "रैंकिंग में वृद्धि",
    univ_why_c4_title: "प्राथमिक अनुसंधान डेटा, पेटेंट एवं NIRF में बढ़त",
    univ_why_c4_desc: "जमीनी चुनौतियां अद्वितीय और अप्रकाशित क्षेत्रीय डेटा प्रदान करती हैं जो किताबों से नहीं मिल सकता। संकाय और शोधार्थी उच्च प्रभाव वाले शोध पत्र प्रकाशित कर सकते हैं, उपयोगिता पेटेंट दायर कर सकते हैं और विश्वविद्यालय की NAAC मान्यता तथा NIRF रैंकिंग को सुदृढ़ कर सकते हैं।",
    univ_why_cta_text: "क्या आप अपने छात्रों और संकाय को वास्तविक, मान्यता प्राप्त चुनौतियों से सशक्त बनाने के लिए तैयार हैं?",
    univ_why_cta_btn: "अपनी यूनिवर्सिटी लैब पंजीकृत करें",

    // Industry Why Help Us
    ind_why_eyebrow: "AapV के साथ साझेदारी क्यों? • प्रत्यक्ष व्यावसायिक प्रतिफल (ROI)",
    ind_why_title: "जमीनी समस्याओं को सुलझाने में मदद क्यों करें? आइए व्यावसायिक लाभ पर बात करें।",
    ind_why_subtitle: "हम समझते हैं कि व्यवसाय केवल नेक इरादों या कॉर्पोरेट नारों पर नहीं, बल्कि वास्तविक लाभ पर चलते हैं। AapV के माध्यम से सामुदायिक समाधानों को प्रायोजित करना केवल दान नहीं है — यह एक रणनीतिक निवेश है जो आपकी भर्ती लागत घटाता है, उत्पादों का परीक्षण करता है और सामाजिक विश्वास बढ़ाता है।",
    ind_why_c1_tag: "प्रतिभा खोज",
    ind_why_c1_title: "शुरुआती प्रतिभा खोज: भर्ती के अनुमानों से मुक्ति",
    ind_why_c1_desc: "पारंपरिक कैंपस इंटरव्यू केवल रटने की क्षमता जांचते हैं, क्रियान्वयन की नहीं। जब आप किसी जीवंत सामुदायिक चुनौती को प्रायोजित करते हैं, तो आप इंजीनियरिंग और तकनीकी छात्रों को वास्तविक समय में कठिन समस्याओं का समाधान करते देखते हैं। आपको अनुभवी युवाओं को सीधे चुनने का अवसर मिलता है, जिससे भर्ती और ऑनबोर्डिंग लागत भारी मात्रा में घट जाती है।",
    ind_why_c2_tag: "बाजार सत्यापन",
    ind_why_c2_title: "वास्तविक ग्रामीण बाजार परीक्षण: निःशुल्क जमीनी सैंडबॉक्स",
    ind_why_c2_desc: "बेंगलुरु या गुरुग्राम के वातानुकूलित दफ्तरों में बैठकर भारत के लिए उत्पाद बनाना कठिन है। यदि आप एग्रीटेक, सौर माइक्रोग्रिड, ईवी बैटरी या स्वच्छता उपकरण विकसित कर रहे हैं, तो झारखंड के जिले एक अतुलनीय परीक्षण स्थल हैं। लाखों रुपये बड़े पैमाने पर विनिर्माण में लगाने से पहले आपको सीधे वास्तविक उपयोगकर्ताओं से निष्पक्ष फीडबैक मिलता है।",
    ind_why_c3_tag: "पारदर्शी सीएसआर",
    ind_why_c3_title: "सत्यापनीय सीएसआर: 100% पारदर्शी, बोर्ड-रेडी प्रभाव",
    ind_why_c3_desc: "अनिवार्य सीएसआर बजट अक्सर अस्पष्ट रिपोर्टों में खो जाता है। AapV के साथ, प्रत्येक रुपये को खुले, जियो-टैग किए गए डैशबोर्ड पर ट्रैक किया जाता है। आप ठीक वही चापाकल मरम्मत, सोलर यूनिट या सेंसर देख सकते हैं जिसे स्थापित किया गया — समय-मुहर वाली तस्वीरों, नागरिक फीडबैक और पारदर्शी ऑडिट अनुपालन के साथ।",
    ind_why_c4_tag: "रणनीतिक विश्वास",
    ind_why_c4_title: "सामुदायिक सद्भाव एवं सुगम क्षेत्रीय स्वीकृतियां",
    ind_why_c4_desc: "औद्योगिक, खनन या विनिर्माण क्षेत्रों में काम करने के लिए वास्तविक सामाजिक स्वीकृति और स्थानीय विश्वास आवश्यक है। जिला प्रशासन के साथ मिलकर स्थानीय शिकायतों को दूर करने से स्थानीय लोगों और सरकारी विभागों के साथ मजबूत संबंध बनते हैं, जिससे परिचालन में सुगमता और तीव्र क्षेत्रीय स्वीकृतियां मिलती हैं।",
    ind_why_cta_text: "क्या आप महत्वपूर्ण स्थानीय समस्याओं को हल करते हुए मापने योग्य व्यावसायिक लाभ प्राप्त करने के लिए तैयार हैं?",
    ind_why_cta_btn: "आज ही हमारे भागीदार बनें",

    // University Auth
    univ_login_btn: "संकाय एवं लैब लॉगिन",
    univ_login_title: "विश्वविद्यालय कार्यक्षेत्र लॉगिन",
    univ_login_sub: "नागरिक चुनौतियों को अपनाने, अनुसंधान अनुदान प्राप्त करने और प्रोटोटाइप विकसित करने के लिए अपने संस्थागत क्रेडेंशियल्स से साइन इन करें।",
    univ_label_email: "संस्थागत ईमेल / संकाय आईडी",
    univ_label_institution: "संस्थान चुनें",
    univ_label_password: "पासवर्ड / सुरक्षा कुंजी",
    btn_univ_signin: "विश्वविद्यालय पोर्टल में साइन इन करें →",

    // Industry Auth
    ind_login_btn: "उद्योग एवं सीएसआर लॉगिन",
    ind_login_title: "उद्योग एवं सीएसआर भागीदार लॉगिन",
    ind_login_sub: "सत्यापित प्रोटोटाइप को फंड करने, तकनीकी मार्गदर्शन प्रदान करने और सीएसआर प्रभाव को ट्रैक करने के लिए साइन इन करें।",
    ind_label_email: "कॉर्पोरेट आधिकारिक ईमेल",
    ind_label_company: "कंपनी / सीएसआर फाउंडेशन",
    ind_label_password: "कॉर्पोरेट एक्सेस कुंजी",
    btn_ind_signin: "उद्योग पोर्टल में साइन इन करें →",

    // Admin Auth
    admin_login_btn: "प्रशासनिक अधिकारी लॉगिन",
    admin_login_title: "राज्य प्रशासन कमांड सेंटर लॉगिन",
    admin_login_sub: "झारखंड राज्य प्रशासन, विभागीय सचिवों एवं टास्कफोर्स अधिकारियों के लिए सुरक्षित लॉगिन।",
    admin_label_email: "आधिकारिक सरकारी ईमेल / अधिकारी आईडी",
    admin_label_dept: "विभाग / एजेंसी",
    admin_label_password: "प्रशासनिक सुरक्षा पिन",
    btn_admin_signin: "कमांड सेंटर में प्रवेश करें →",

    // Theme Mode
    theme_dark: "डार्क",
    theme_light: "लाइट",
    theme_toggle_title: "डार्क/लाइट मोड बदलें",

    // 404 Error Page
    page_not_found_title: "404 • पृष्ठ नहीं मिला",
    page_not_found_desc: "जिस पृष्ठ को आप खोज रहे हैं वह मौजूद नहीं है, हटा दिया गया है या स्थानांतरित कर दिया गया है।",
    btn_back_home: "नागरिक होम पर वापस जाएं",

    // Mobile Portal Menu
    portal_sub_citizen: "शिकायत एवं समाधान",
    portal_sub_impact: "लाइव प्रगति एवं आंकड़े",
    portal_sub_admin: "पंचायत प्रशासन",
    portal_sub_university: "शैक्षणिक एवं अनुसंधान केंद्र",
    portal_sub_industry: "सीएसआर एवं निजी क्षेत्र",
    mobile_menu_title: "सभी पोर्टल",

    // Admin Intelligence & Triage
    admin_report_title: "शिकायत एवं प्रभाव विश्लेषण रिपोर्ट",
    admin_report_sub: "Q1-Q3 2026 के लिए 2,481 शिकायतों, 24 जिलों और अंतर-विभागीय समाधान मेट्रिक्स का सत्यापित डेटासेट डाउनलोड करें।",
    admin_report_preview_title: "डेटासेट सारांश (लाइव सिंक)",
    admin_rep_records: "रिकॉर्ड्स",
    admin_rep_validated: "सत्यापित",
    admin_rep_districts: "जिले",
    btn_export_csv: "पूर्ण CSV डेटासेट डाउनलोड करें (.csv)",
    btn_print_summary: "कार्यकारी PDF सारांश प्रिंट / सहेजें",
    triage_lbl_priority: "गंभीरता / प्राथमिकता",
    triage_lbl_dept: "प्रेषण गंतव्य विभाग",
    triage_lbl_notes: "प्रशासनिक अधिकारी टिप्पणी / कार्रवाई निर्देश",
    btn_cancel: "रद्द करें",
    btn_confirm_triage: "मंजूरी दें और टिकट भेजें ✓",

    // University Sandbox & Challenges
    univ_modal_badge: "विश्वविद्यालय नवाचार लैब • शैक्षणिक सैंडबॉक्स",
    univ_create_title: "ज़मीनी अनुसंधान एवं विकास परियोजना शुरू करें",
    univ_create_sub: "एनईपी क्रेडिट और कॉर्पोरेट सीएसआर सह-वित्तपोषण के लिए झारखंड की सत्यापित सामुदायिक समस्याओं से जुड़ी संकाय या छात्र परियोजना पंजीकृत करें।",
    univ_lbl_proj_title: "परियोजना का शीर्षक *",
    univ_ph_proj_title: "उदा. सौर ऊर्जा संचालित आटा चक्की स्वचालन",
    univ_lbl_college: "विश्वविद्यालय / संस्थान *",
    univ_ph_college: "उदा. बीआईटी मेसरा / एनआईटी जमशेदपुर",
    univ_lbl_lead: "संकाय मेंटर / छात्र प्रमुख *",
    univ_ph_lead: "उदा. डॉ. पी. कुमार / अनन्य रॉय",
    univ_lbl_challenge: "जुड़ी हुई जमीनी चुनौती",
    univ_lbl_support_req: "आवश्यक बाहरी सहयोग",
    support_funding: "सीड ग्रांट / फंडिंग",
    support_equipment: "हार्डवेयर / सेंसर्स",
    support_field: "फील्ड टेस्टिंग पहुंच",
    support_mfg: "प्रोटोटाइप निर्माण और टूलिंग",
    support_mentorship: "कॉर्पोरेट मेंटरशिप",
    univ_lbl_abstract: "तकनीकी कार्यप्रणाली सारांश *",
    univ_ph_abstract: "प्रोटोटाइप आर्किटेक्चर, मुख्य तकनीकी घटक और अपेक्षित ग्रामीण प्रभाव का विवरण दें…",
    btn_submit_proj: "सीएसआर मैच के लिए पंजीकृत करें ✓",
    btn_print_dossier: "डोज़ियर प्रिंट / सहेजें",
    btn_claim_challenge: "लैब के लिए चुनौती का चयन करें",

    // Industry & CSR
    filter_all_support: "सभी आवश्यक सहयोग",
    ind_no_match_title: "आपकी खोज के अनुसार कोई परियोजना नहीं मिली",
    ind_no_match_sub: "कृपया 'सभी डोमेन' चुनें या खोज शब्द साफ़ करें।",
    ind_modal_badge: "कॉर्पोरेट सीएसआर एवं नवाचार सह-वित्तपोषण",
    ind_pledge_title: "जमीनी नवाचार के साथ साझेदारी करें",
    ind_lbl_org: "उद्यम / संस्था का नाम *",
    ind_ph_org: "उदा. टाटा स्टील सीएसआर फाउंडेशन / जेएसडब्ल्यू",
    ind_lbl_rep: "प्रतिनिधि एवं पदनाम *",
    ind_ph_rep: "उदा. राजेश शर्मा, सीएसआर प्रमुख",
    ind_lbl_email: "आधिकारिक कॉर्पोरेट ईमेल *",
    ind_ph_email: "उदा. csr@tatasteel.com",
    ind_lbl_phone: "आधिकारिक फोन / व्हाट्सएप *",
    ind_ph_phone: "उदा. +91 98765 43210",
    ind_lbl_support_types: "सहयोग योगदान के प्रकार *",
    ind_lbl_grant_amount: "प्रस्तावित अनुदान राशि (वैकल्पिक, ₹ INR)",
    ind_ph_amount: "उदा. ₹2,00,000 या उपकरण समकक्ष",
    ind_lbl_notes: "सहयोग दायरा एवं विशेष शर्तें",
    ind_ph_notes: "मील के पत्थर, संवितरण शर्तें या मेंटरशिप कार्यक्रम संक्षेप में बताएं…",
    btn_confirm_pledge: "सीएसआर सहयोग संकल्प की पुष्टि करें ✓",
    ind_commitments_badge: "कॉर्पोरेट रजिस्ट्री • सक्रिय सीएसआर संकल्प",
    ind_commitments_title: "मेरे सक्रिय सीएसआर संकल्प",
    ind_commitments_sub: "अपनी कंपनी के आधिकारिक समस्या प्रायोजन और विश्वविद्यालय साझेदारी की समीक्षा और ट्रैक करें।",
    btn_close: "बंद करें",
    btn_print_csr_cert: "सीएसआर प्रभाव प्रमाणपत्र प्रिंट करें"
  },
  sat: {
    label: "संताली",
    code: "sat",
    speechLang: "hi-IN",
    nav_citizen: "ᱟᱹᱛᱩ ᱦᱚᱲ",
    nav_impact: "ᱞᱟᱦᱟᱱᱛᱤ ᱟᱨ ᱴᱨᱟᱠ",
    nav_admin: "ᱥᱟᱥᱚᱱᱤᱭᱟᱹ",
    nav_university: "ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ",
    nav_industry: "ᱵᱮᱯᱟᱨ ᱠᱟᱹᱨᱜᱟᱲ",
    hero_eyebrow: "ᱡᱷᱟᱨᱠᱷᱚᱸᱰ • ᱟᱢᱟᱜ ᱟᱲᱟᱝ, ᱟᱢᱟᱜ ᱜᱟᱶᱛᱟ",
    hero_title: "ᱟᱢᱟᱜ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱢᱤᱫ ᱛᱟᱞᱢᱟ ᱴᱷᱟᱶ᱾",
    hero_lead: "ᱟᱢᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱟᱨ ᱟᱲᱟᱝ ᱛᱮ ᱮᱴᱠᱮᱴᱚᱬᱮ, ᱩᱭᱦᱟᱹᱨ ᱟᱨ ᱞᱟᱹᱠᱛᱤ ᱠᱚ ᱞᱟᱹᱭ ᱞᱟᱹᱜᱤᱫ ᱥᱚᱦᱚᱡᱽ ᱴᱷᱟᱶ᱾",
    trust_identity: '🔒 ᱟᱢᱟᱜ ᱩᱯᱨᱩᱢ ᱫᱩᱜ ᱫᱚᱦᱚ ᱟᱨ ᱥᱩᱨᱚᱠᱷᱤᱛ ᱢᱮᱱᱟᱜ-ᱟ <span class="green-tick">✓</span>',
    step_title: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱫᱟᱠᱷᱚᱞ ᱢᱮ",
    label_submitter_type: "ᱤᱧ ᱱᱚᱶᱟ ᱞᱮᱠᱟᱛᱮ ᱫᱟᱠᱷᱚᱞ ᱮᱫᱟ",
    opt_citizen: "👤 ᱟᱹᱛᱩ ᱦᱚᱲ",
    opt_community: "👥 ᱜᱟᱶᱛᱟ / ᱡᱩᱢᱤᱫᱽ",
    opt_pri: "🏛️ ᱯᱚᱧᱪᱟᱭᱚᱛᱤ ᱨᱟᱡᱽ (PRI)",
    label_community_name: "ᱜᱟᱶᱛᱟ / ᱡᱩᱢᱤᱫᱽ ᱨᱮᱭᱟᱜ ᱧᱩᱛᱩᱢ",
    placeholder_community_name: "ᱡᱮᱞᱮᱠᱟ: ᱛᱤᱨᱞᱟᱹ ᱜᱟᱶᱛᱟ, ᱪᱟᱹᱥᱤ ᱜᱩᱴ…",
    label_problem: "ᱟᱢᱟᱜ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱞᱟᱛᱟᱨ ᱨᱮ ᱚᱞ ᱢᱮ",
    placeholder_problem: "ᱟᱢᱟᱜ ᱟᱹᱲᱟᱹ ᱛᱮ ᱨᱚᱲ ᱢᱮ ᱥᱮ ᱚᱞ ᱢᱮ…\nᱡᱮᱞᱮᱠᱟ: ᱟᱞᱮ ᱟᱹᱛᱩ ᱨᱮ ᱪᱟᱯᱟᱠᱚᱞ ᱵᱟᱝ ᱠᱟᱹᱢᱤ ᱠᱟᱱᱟ᱾",
    btn_voice: "🎙 AI ᱟᱲᱟᱝ-ᱠᱷᱚᱱ-ᱚᱞ",
    voice_status_ready: "ᱨᱚᱲ ᱢᱮ (ᱥᱟᱱᱛᱟᱲᱤ, हिन्दी, English)",
    voice_status_listening: "ᱟᱸᱡᱚᱢᱮᱫᱟ… ᱨᱚᱲ ᱢᱮ (ᱛᱷᱟᱢᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱟᱨᱦᱚᱸ ᱚᱛᱟᱭ ᱢᱮ)",
    voice_status_captured: "ᱟᱲᱟᱝ ᱨᱮᱠᱳᱨᱰ ᱮᱱᱟ ✓",
    voice_status_processing: "Sarvam AI ᱛᱮ ᱟᱲᱟᱝ ᱵᱤᱪᱟᱹᱨᱚᱜ ᱠᱟᱱᱟ…",
    voice_status_error: "ᱟᱲᱟᱝ ᱵᱟᱝ ᱥᱟᱵ ᱞᱮᱱᱟ",
    voice_not_supported: "ᱱᱚᱶᱟ ᱵᱨᱟᱣᱡᱟᱨ ᱨᱮ ᱟᱲᱟᱝ ᱵᱮᱵᱷᱟᱨ ᱵᱟᱝ ᱜᱟᱱᱚᱜ-ᱟ᱾",
    label_location: "ᱴᱷᱟᱶ ᱱᱚᱸᱰᱮ ᱚᱞ ᱢᱮ",
    placeholder_location: "ᱟᱹᱛᱩ / ᱵᱟᱡᱟᱨ / ᱡᱤᱞᱟᱹ",
    btn_detect_location: "⌖ ᱤᱧᱟᱜ ᱴᱷᱟᱶ ᱵᱮᱵᱷᱟᱨ ᱢᱮ",
    label_media: "ᱪᱤᱛᱟᱹᱨ ᱥᱮ ᱵᱷᱤᱰᱤᱭᱳ ᱡᱚᱲᱟᱣ ᱢᱮ",
    optional: "(ᱵᱟᱪᱷᱟᱣ ᱞᱮᱠᱟᱛᱮ)",
    btn_submit: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱫᱟᱠᱷᱚᱞ ᱢᱮ →",
    how_eyebrow: "ᱵᱷᱤᱛᱨᱤ ᱠᱟᱹᱢᱤᱦᱚᱨᱟ • ᱪᱮᱫ ᱞᱮᱠᱟ ᱪᱟᱞᱟᱜ ᱠᱟᱱᱟ",
    how_title: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱞᱟᱹᱭ ᱛᱟᱭᱚᱢ ᱪᱮᱫ ᱦᱩᱭᱩᱜ-ᱟ?",
    how_desc: "ᱢᱤᱫ ᱥᱟᱯᱷᱟ ᱔-ᱫᱷᱟᱯ ᱠᱟᱹᱢᱤᱦᱚᱨᱟ ᱡᱟᱦᱟᱸ ᱫᱚ ᱟᱹᱛᱩ ᱦᱚᱲ ᱟᱲᱟᱝ ᱠᱷᱚᱱ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱥᱚᱞᱦᱮ ᱨᱮ ᱵᱚᱫᱚᱞᱟ᱾",
    how_step1_title: "᱑. ᱮᱴᱠᱮᱴᱚᱬᱮ ᱫᱟᱠᱷᱚᱞ ᱢᱮ",
    how_step1_desc: "ᱟᱢᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱛᱮ ᱨᱚᱲ ᱢᱮ ᱥᱮ ᱚᱞ ᱢᱮ᱾ ᱡᱟᱦᱟᱸᱱ ᱴᱮᱠᱱᱤᱠᱟᱞ ᱯᱷᱚᱨᱢ ᱨᱮᱭᱟᱜ ᱞᱟᱹᱠᱛᱤ ᱵᱟᱹᱱᱩᱜ-ᱟ᱾",
    how_step2_title: "᱒. AI ᱵᱤᱪᱟᱹᱨ ᱟᱨ ᱛᱷᱚᱠ ᱵᱮᱱᱟᱣ",
    how_step2_desc: "AI ᱞᱟᱹᱠᱛᱤ, ᱴᱷᱟᱶ ᱟᱨ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱨᱮᱱᱟᱜ ᱛᱷᱚᱠ (ᱫᱟᱜ, ᱪᱟᱥ, ᱥᱮᱪᱮᱫ) ᱠᱚ ᱟᱯᱱᱟᱨ ᱛᱮ ᱪᱤᱱᱦᱟᱹᱣᱟ᱾",
    how_step3_title: "᱓. ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱯᱷᱤᱰ ᱨᱮ ᱵᱷᱮᱡᱟ",
    how_step3_desc: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱠᱚ ᱤᱸᱡᱤᱱᱤᱭᱟᱨᱤᱝ ᱠᱚᱞᱮᱡᱽ ᱟᱨ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚᱣᱟᱜ ᱯᱷᱤᱰ ᱨᱮ ᱥᱮᱴᱮᱨᱚᱜ-ᱟ᱾",
    how_step4_title: "᱔. ᱴᱤᱢ ᱠᱟᱹᱢᱤ ᱟᱨ ᱥᱚᱞᱦᱮ",
    how_step4_desc: "ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱟᱨ ᱢᱟᱪᱮᱛ ᱠᱚ ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ ᱵᱮᱱᱟᱣ ᱠᱟᱛᱮ ᱡᱟᱭᱜᱟ ᱨᱮ ᱥᱚᱞᱦᱮ ᱠᱚ ᱞᱟᱜᱟᱣᱟ᱾",
    how_progress_title: "ᱟᱢᱟᱜ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱨᱮᱱᱟᱜ ᱞᱟᱦᱟᱱᱛᱤ ᱧᱮᱞ ᱢᱮ",
    how_progress_desc: "ᱟᱢᱟᱜ ᱠᱟᱛᱷᱟ ᱨᱮ ᱪᱮᱫ ᱠᱟᱹᱢᱤ ᱦᱩᱭ ᱟᱠᱟᱱᱟ? ᱪᱟᱹᱞᱩ ᱯᱨᱚᱡᱮᱠᱴ ᱟᱨ ᱚᱨᱡᱚ ᱴᱨᱟᱠ ᱢᱮ᱾",
    how_progress_btn: "ᱞᱟᱦᱟᱱᱛᱤ ᱟᱨ ᱚᱨᱡᱚ ᱧᱮᱞ ᱢᱮ (Impact) →",
    toast_loc_detected: "ᱴᱷᱟᱶ ᱧᱟᱢ ᱮᱱᱟ᱾ ᱥᱟᱵᱽᱢᱤᱴ ᱢᱟᱲᱟᱝ ᱵᱚᱫᱚᱞ ᱫᱟᱲᱮᱭᱟᱜ-ᱟᱢ᱾",
    toast_loc_failed: "ᱴᱷᱟᱶ ᱵᱟᱝ ᱧᱟᱢ ᱞᱮᱱᱟ᱾ ᱫᱟᱭᱟᱠᱟᱛᱮ ᱟᱹᱛᱩ ᱥᱮ ᱡᱤᱞᱟᱹ ᱚᱞ ᱢᱮ᱾",
    toast_loc_prompt: "ᱫᱟᱭᱟᱠᱟᱛᱮ ᱟᱹᱛᱩ ᱥᱮ ᱡᱤᱞᱟᱹ ᱚᱞ ᱢᱮ᱾",
    toast_problem_empty: "ᱫᱟᱭᱟᱠᱟᱛᱮ ᱞᱟᱦᱟ ᱨᱮ ᱞᱟᱹᱭ ᱢᱮ ᱪᱮᱫ ᱦᱩᱭᱩᱜ ᱠᱟᱱᱟ᱾",
    toast_problem_submitted: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱫᱟᱠᱷᱚᱞ ᱮᱱᱟ᱾ AI ᱱᱚᱶᱟ ᱥᱟᱡᱟᱣᱮᱫᱟ᱾",
    loc_detected_val: "ᱴᱷᱟᱶ ᱧᱟᱢ ᱮᱱᱟ — ᱡᱷᱟᱨᱠᱷᱚᱸᱰ",
    btn_login: "ᱞᱚᱜᱽ ᱤᱱ",
    btn_logout: "ᱞᱚᱜᱽ ᱟᱣᱩᱴ",
    role_citizen: "ᱟᱹᱛᱩ ᱦᱚᱲ",
    auth_card_prompt: "ᱟᱢᱟᱜ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱴᱨᱟᱠ ᱢᱮ ᱟᱨ ᱟᱯᱰᱮᱴ ᱧᱟᱢ ᱢᱮ",
    auth_card_sub: "ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱧᱮᱞ ᱞᱟᱹᱜᱤᱫ ᱢᱚᱵᱟᱭᱤᱞ ᱱᱚᱢᱵᱚᱨ ᱛᱮ ᱞᱚᱜᱽ ᱤᱱ ᱢᱮ᱾",
    auth_card_logged_title: "ᱞᱮᱠᱟᱛᱮ ᱞᱚᱜᱽ ᱤᱱ ᱢᱮᱱᱟᱜ-ᱟ:",
    auth_card_logged_sub: "ᱫᱟᱠᱷᱚᱞ ᱟᱠᱟᱱ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱟᱢᱟᱜ ᱮᱠᱟᱣᱩᱱᱴ ᱥᱟᱞᱟᱜ ᱡᱚᱲᱟᱣᱜ-ᱟ᱾",
    login_modal_title: "ᱟᱹᱛᱩ ᱦᱚᱲ ᱞᱚᱜᱽ ᱤᱱ",
    login_modal_sub: "ᱟᱢᱟᱜ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱨᱮᱭᱟᱜ ᱦᱟᱞᱚᱛ ᱧᱮᱞ ᱟᱨ SMS ᱟᱯᱰᱮᱴ ᱧᱟᱢ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱭᱤᱱ ᱤᱱ ᱢᱮ᱾",
    label_phone: "ᱢᱚᱵᱟᱭᱤᱞ ᱱᱚᱢᱵᱚᱨ",
    placeholder_phone: "98765 43210",
    phone_hint: "ᱯᱩᱥᱴᱟᱹᱣ ᱞᱟᱹᱜᱤᱫ ᱱᱚᱶᱟ ᱱᱚᱢᱵᱚᱨ ᱨᱮ OTP ᱵᱷᱮᱡᱟᱭᱟ᱾",
    btn_send_otp: "OTP ᱧᱟᱢ ᱢᱮ →",
    otp_sent_msg: "OTP ᱵᱷᱮᱡᱟ ᱟᱠᱟᱱᱟ:",
    btn_change_number: "ᱵᱚᱫᱚᱞ ᱢᱮ",
    label_otp: "᱔ ᱮᱞ OTP ᱚᱞ ᱢᱮ",
    otp_demo_hint: "ᱴᱮᱥᱴ ᱞᱟᱹᱜᱤᱫ ᱰᱮᱢᱚ OTP 1234 ᱚᱞ ᱢᱮᱱᱟᱜ-ᱟ᱾",
    btn_verify_login: "ᱯᱩᱥᱴᱟᱹᱣ ᱟᱨ ᱥᱟᱭᱤᱱ ᱤᱱ ᱢᱮ →",
    login_or: "ᱥᱮ",
    demo_login_title: "ᱰᱮᱢᱚ ᱞᱚᱜᱽ ᱤᱱ ᱵᱟᱪᱷᱟᱣ ᱢᱮ:",
    login_success_toast: "ᱞᱚᱜᱽ ᱤᱱ ᱯᱩᱨᱟᱹᱣ ᱮᱱᱟ! ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ᱾",
    logout_success_toast: "ᱞᱚᱜᱽ ᱟᱣᱩᱴ ᱮᱱᱟ᱾",
    toast_problem_submitted_linked: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱫᱟᱠᱷᱚᱞ ᱮᱱᱟ ᱟᱨ ᱟᱢᱟᱜ ᱮᱠᱟᱣᱩᱱᱴ ᱨᱮ ᱡᱚᱲᱟᱣ ᱮᱱᱟ ✓",
    login_to_submit_title: "ᱟᱢᱟᱜ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱫᱟᱠᱷᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱞᱚᱜᱽ ᱤᱱ ᱢᱮ",
    login_to_submit_desc: "OTP ᱧᱟᱢ ᱟᱨ ᱟᱢᱟᱜ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱫᱟᱠᱷᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱢᱚᱵᱟᱭᱤᱞ ᱱᱚᱢᱵᱚᱨ ᱚᱞ ᱢᱮ᱾",
    btn_login_and_proceed: "ᱞᱚᱜᱽ ᱤᱱ ᱟᱨ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱫᱟᱠᱷᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱞᱟᱦᱟᱜ ᱢᱮ →",
    btn_resend_otp: "ᱫᱚᱦᱲᱟ OTP ᱵᱷᱮᱡᱟᱭ ᱢᱮ",
    demo_login_quick: "⚡ ᱑-ᱠᱞᱤᱠ ᱰᱮᱢᱚ ᱞᱚᱜᱽ ᱤᱱ (ᱨᱟᱢᱮᱥ ᱢᱩᱨᱢᱩ)",
    guest_continue_btn: "ᱯᱮᱲᱟ ᱞᱮᱠᱟᱛᱮ ᱞᱟᱦᱟᱜ ᱢᱮ (ᱵᱤᱱᱟ ᱞᱚᱜᱽ ᱤᱱ) →",
    session_verified_badge: "ᱯᱩᱥᱴᱟᱹᱣ ᱟᱹᱛᱩ ᱦᱚᱲ",
    btn_logout_switch: "ᱞᱚᱜᱽ ᱟᱣᱩᱴ / ᱵᱚᱫᱚᱞ",
    voice_narrate_btn: "🔊 ᱟᱸᱡᱚᱢ ᱢᱮ",
    voice_bar_title: "ᱟᱲᱟᱝ ᱜᱚᱲᱚᱭᱤᱡ",
    voice_read_page: "ᱥᱟᱱᱟᱢ ᱥᱟᱦᱴᱟ ᱯᱟᱲᱦᱟᱣ ᱢᱮ",
    voice_stop: "ᱛᱷᱟᱢᱵᱷᱟᱣ ᱢᱮ",
    voice_tap_mode: "ᱚᱞ ᱡᱚᱴᱮᱫ ᱠᱟᱛᱮ ᱟᱸᱡᱚᱢ ᱢᱮ",
    voice_reading_active: "ᱯᱟᱲᱦᱟᱣ ᱟᱸᱡᱚᱢᱮᱫᱟ…",
    contact_eyebrow: "ᱟᱹᱛᱩ ᱦᱚᱲ ᱜᱚᱲᱚ ᱟᱨ ᱥᱟᱹᱜᱟᱹᱭ",
    contact_title: "ᱟᱞᱮ ᱟᱢᱟᱜ ᱜᱚᱲᱚ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱯᱲᱟᱣ ᱢᱮᱱᱟᱜ ᱞᱮᱭᱟ",
    contact_desc: "᱒᱔/᱗ ᱟᱹᱛᱩ ᱦᱚᱲ ᱜᱚᱲᱚ ᱴᱤᱢ ᱥᱟᱞᱟᱜ ᱯᱷᱳᱱ ᱠᱚᱞ, ᱤᱢᱮᱞ ᱥᱮ ᱣᱟᱴᱥᱮᱯ ᱛᱮ ᱥᱚᱡᱷᱮ ᱨᱚᱯᱚᱲ ᱢᱮ᱾",
    contact_call_title: "ᱴᱳᱞ-ᱯᱷᱨᱤ ᱦᱮᱞᱯᱞᱟᱭᱤᱱ",
    contact_call_desc: "AapV ᱜᱚᱲᱚᱭᱤᱡ ᱥᱟᱞᱟᱜ ᱥᱚᱡᱷᱮ ᱨᱚᱯᱚᱲ ᱢᱮ᱾ ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱤᱱ ᱥᱟᱱᱟᱢ ᱦᱚᱲ ᱞᱟᱹᱜᱤᱫ ᱵᱤᱱᱟ ᱯᱩᱭᱥᱟᱹ ᱛᱮ᱾",
    contact_call_badge: "᱒᱔/᱗ ᱪᱟᱹᱞᱩ",
    contact_call_btn: "📞 ᱯᱷᱳᱱ ᱢᱮ 1800-345-2026",
    contact_email_title: "ᱤᱢᱮᱞ ᱜᱚᱲᱚ",
    contact_email_desc: "ᱮᱴᱠᱮᱴᱚᱬᱮ, ᱪᱤᱛᱟᱹᱨ ᱥᱮ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱠᱟᱹᱢᱤ ᱵᱟᱵᱚᱛ ᱤᱢᱮᱞ ᱵᱷᱮᱡᱟᱭ ᱢᱮ᱾",
    contact_email_badge: "᱒᱔ ᱜᱷᱟᱱᱴᱟ ᱨᱮ ᱛᱮᱞᱟ",
    contact_email_btn: "✉️ ᱤᱢᱮᱞ ᱵᱷᱮᱡᱟᱭ ᱢᱮ",
    contact_wa_title: "ᱣᱟᱴᱥᱮᱯ ᱛᱮ ᱨᱚᱯᱚᱲ ᱢᱮ",
    contact_wa_desc: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱨᱮᱱᱟᱜ ᱦᱟᱞᱚᱛ ᱧᱮᱞ, ᱪᱤᱛᱟᱹᱨ ᱵᱷᱮᱡᱟ ᱟᱨ ᱟᱢᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱛᱮ ᱣᱟᱴᱥᱮᱯ ᱨᱮ ᱨᱚᱯᱚᱲ ᱢᱮ᱾",
    contact_wa_badge: "ᱞᱚᱜᱚᱱ ᱡᱚᱯᱲᱟᱣ",
    contact_wa_btn: "💬 ᱣᱟᱴᱥᱮᱯ ᱛᱮ ᱨᱚᱯᱚᱲ ᱢᱮ",
    contact_note_left: "📍 ᱯᱚᱱᱚᱛ ᱥᱩᱵᱤᱫᱷᱟ ᱛᱟᱞᱢᱟ: ᱯᱨᱳᱡᱮᱠᱴ ᱵᱷᱚᱵᱚᱱ, ᱫᱷᱩᱨᱣᱟ, ᱨᱟᱺᱪᱤ — 834004",
    contact_note_right: "ᱦᱮᱞᱯᱞᱟᱭᱤᱱ ᱒᱔×᱗ ᱪᱟᱹᱞᱩ • ᱡᱤᱞᱟᱹ ᱛᱟᱞᱢᱟ ᱥᱚᱢᱵᱟᱨ ᱠᱷᱚᱱ ᱥᱚᱱᱤᱵᱟᱨ ᱥᱮᱛᱟᱜ ᱙ ᱠᱷᱚᱱ ᱟᱹᱭᱩᱵ ᱖ ᱴᱟᱲᱟᱝ",
    impact_eyebrow: "ᱡᱷᱟᱨᱠᱷᱚᱸᱰ • ᱥᱟᱯᱷᱟ ᱠᱟᱹᱢᱤ ᱟᱨ ᱞᱟᱦᱟᱱᱛᱤ",
    impact_hero_title: "ᱢᱤᱫᱩᱱ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱴᱨᱟᱠᱤᱝ ᱟᱨ ᱚᱨᱡᱚ",
    impact_hero_lead: "ᱟᱹᱛᱩ ᱦᱚᱲ ᱟᱲᱟᱝ ᱠᱷᱚᱱ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱞᱮᱵᱽ ᱟᱨ ᱡᱟᱭᱜᱟ ᱨᱮ ᱥᱚᱞᱦᱮ᱾ ᱪᱟᱹᱞᱩ ᱠᱟᱹᱢᱤ, ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱ ᱠᱟᱹᱢᱤ ᱟᱨ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱴᱨᱟᱠ ᱢᱮ᱾",
    metric_problems_title: "ᱫᱟᱠᱷᱚᱞ ᱟᱠᱟᱱ ᱮᱴᱠᱮᱴᱚᱬᱮ",
    metric_problems_sub: "᱒᱔ ᱜᱚᱴᱟᱝ ᱡᱤᱞᱟᱹ ᱠᱷᱚᱱ",
    metric_active_title: "ᱪᱟᱹᱞᱩ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱯᱨᱚᱡᱮᱠᱴ",
    metric_active_sub: "ᱤᱸᱡᱤᱱᱤᱭᱟᱨᱤᱝ ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ",
    metric_completed_title: "ᱯᱩᱨᱟᱹᱣ ᱟᱨ ᱯᱩᱥᱴᱟᱹᱣ ᱥᱚᱞᱦᱮ",
    metric_completed_sub: "ᱟᱹᱛᱩ ᱨᱮ ᱞᱟᱜᱟᱣ ᱟᱠᱟᱱ",
    metric_impacted_title: "ᱞᱟᱵᱷ ᱧᱟᱢ ᱟᱠᱟᱫ ᱦᱚᱲ",
    metric_impacted_sub: "ᱥᱚᱡᱷᱮ ᱵᱷᱟᱹᱞᱟᱹᱭ ᱧᱟᱢ",
    spotlight_tag: "ᱥᱟᱹᱨᱤ ᱚᱨᱡᱚ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱦᱱᱤ",
    spotlight_title: "ᱫᱩᱢᱠᱟᱹ ᱥᱳᱞᱟᱨ ᱫᱟᱜ ᱥᱟᱯᱷᱟ ᱠᱟᱹᱢᱤ",
    spotlight_desc: "ᱥᱤᱠᱟᱨᱤᱯᱟᱲᱟ ᱨᱤᱱ ᱦᱚᱲ ᱪᱟᱯᱟᱠᱚᱞ ᱫᱟᱜ ᱵᱟᱹᱲᱤᱡ ᱠᱟᱛᱷᱟ ᱠᱚ ᱞᱟᱹᱭ ᱞᱮᱫᱟ᱾ BIT Mesra ᱨᱤᱱ ᱤᱸᱡᱤᱱᱤᱭᱟᱨ ᱥᱳᱞᱟᱨ ᱯᱷᱤᱞᱴᱟᱨ ᱠᱚ ᱵᱮᱱᱟᱣ ᱠᱮᱫᱟ᱾ ᱱᱤᱛ ᱫᱤᱱᱟᱹᱢ ᱔,᱒᱐᱐ ᱦᱚᱲ ᱥᱟᱯᱷᱟ ᱫᱟᱜ ᱧᱟᱢᱮᱫᱟ᱾",
    spotlight_stat_dist: "ᱡᱤᱞᱟᱹ: <b>ᱫᱩᱢᱠᱟᱹ, ᱡᱷᱟᱨᱠᱷᱚᱸᱰ</b>",
    spotlight_stat_team: "ᱴᱤᱢ: <b>BIT Mesra Environmental Lab</b>",
    spotlight_stat_status: "ᱚᱨᱡᱚ: <b>᱑᱐᱐% ᱪᱟᱹᱞᱩ ᱟᱨ ᱯᱩᱥᱴᱟᱹᱣ ✓</b>",
    tracking_title: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱟᱨ ᱯᱨᱚᱡᱮᱠᱴ ᱞᱟᱦᱟᱱᱛᱤ ᱴᱨᱟᱠᱟᱨ",
    tracking_subtitle: "ᱪᱟᱹᱞᱩ ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ, ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱ ᱥᱚᱞᱦᱮ ᱟᱨ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱞᱟᱹᱜᱤᱫ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱠᱚ ᱧᱮᱞ ᱢᱮ᱾",
    tab_ongoing: "ᱪᱟᱹᱞᱩ ᱯᱨᱚᱡᱮᱠᱴ (Ongoing)",
    tab_all: "ᱡᱚᱛᱚ",
    tab_completed: "ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱ (Completed)",
    tab_available: "ᱦᱟᱛᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱢᱮᱱᱟᱜ-ᱟ (Available)",
    search_placeholder: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱮᱞ (ᱡᱮᱞᱮᱠᱟ AAPV-2026-0842) ᱥᱮ ᱟᱹᱲᱟᱹ ᱛᱮ ᱥᱮᱸᱫᱽᱨᱟᱭ ᱢᱮ…",
    filter_all_districts: "ᱥᱟᱱᱟᱢ ᱡᱤᱞᱟᱹ",
    filter_all_domains: "ᱥᱟᱱᱟᱢ ᱛᱷᱚᱠ",
    filter_domain_water: "ᱫᱟᱜ ᱟᱨ ᱥᱟᱯᱷᱟ",
    filter_domain_agri: "ᱪᱟᱥ ᱟᱨ ᱫᱟᱜ ᱫᱩᱞ",
    filter_domain_env: "ᱯᱚᱨᱤᱵᱮᱥ ᱟᱨ ᱫᱟᱲᱮ",
    filter_domain_edu: "ᱥᱮᱪᱮᱫ ᱟᱨ ᱰᱤᱡᱤᱴᱟᱞ",
    filter_domain_health: "ᱦᱚᱲᱢᱚ ᱥᱟᱶᱟᱨ ᱟᱨ ᱰᱟᱦᱟᱨ",
    pipeline_step1: "᱑. ᱛᱷᱚᱠ ᱵᱮᱱᱟᱣ",
    pipeline_step2: "᱒. ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ",
    pipeline_step3: "᱓. ᱡᱟᱭᱜᱟ ᱨᱮ ᱴᱮᱥᱴ",
    pipeline_step4: "᱔. ᱞᱟᱜᱟᱣ ᱟᱠᱟᱱ",
    partner_institution: "ᱜᱟᱛᱮ ᱥᱚᱝᱥᱛᱷᱟᱱ",
    state_jharkhand: "ᱡᱷᱟᱨᱠᱷᱚᱸᱰ",
    empty_projects_title: "ᱡᱟᱦᱟᱸᱱ ᱢᱮᱲ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱥᱮ ᱯᱨᱚᱡᱮᱠᱴ ᱵᱟᱝ ᱧᱟᱢ ᱞᱮᱱᱟ",
    empty_projects_desc: "ᱫᱟᱭᱟ ᱠᱟᱛᱮ ᱥᱮᱸᱫᱽᱨᱟ ᱟᱹᱲᱟᱹ ᱥᱮ ᱯᱷᱤᱞᱴᱟᱨ ᱵᱚᱫᱚᱞ ᱠᱟᱛᱮ ᱧᱮᱞ ᱢᱮ᱾",
    citizen_login_required: "ᱫᱟᱭᱟ ᱠᱟᱛᱮ ᱟᱢᱟᱜ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱫᱟᱠᱷᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱢᱳᱵᱟᱭᱤᱞ ᱱᱚᱢᱵᱚᱨ ᱛᱮ ᱞᱚᱜᱤᱱ ᱢᱮ᱾",
    chatbot_header_title: "AapV AI ᱜᱚᱲᱚᱭᱤᱡ • ᱒᱔/᱗ ᱞᱟᱦᱟᱱᱛᱤ ᱠᱷᱚᱵᱚᱨ",
    chatbot_status: "᱒᱔/᱗ ᱪᱟᱹᱞᱩ • ᱟᱭᱢᱟ ᱯᱟᱹᱨᱥᱤ",
    chatbot_welcome: "ᱡᱚᱦᱟᱨ! ᱤᱧ ᱫᱚ ᱟᱢᱤᱡ ᱒᱔/᱗ AI ᱞᱟᱦᱟᱱᱛᱤ ᱜᱚᱲᱚᱭᱤᱡ ᱠᱟᱱᱟᱹᱧ᱾ ᱟᱢᱟᱜ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱨᱮᱭᱟᱜ ᱦᱟᱞᱚᱛ, ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱥᱮ ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱ ᱯᱨᱚᱡᱮᱠᱴ ᱵᱟᱵᱚᱛ ᱠᱩᱞᱤ ᱫᱟᱲᱮᱭᱟᱜ-ᱟᱢ᱾",
    chatbot_placeholder: "ᱞᱟᱦᱟᱱᱛᱤ, ᱮᱴᱠᱮᱴᱚᱬᱮ ᱥᱮ ᱡᱤᱞᱟᱹ ᱵᱟᱵᱚᱛ ᱠᱩᱞᱤ ᱢᱮ… (ᱥᱮ ᱢᱟᱭᱤᱠ ᱚᱛᱟᱭ ᱢᱮ)",
    chatbot_chip_water: "💧 ᱫᱩᱢᱠᱟᱹ ᱨᱮ ᱫᱟᱜ ᱯᱨᱚᱡᱮᱠᱴ",
    chatbot_chip_completed: "✅ ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱ ᱠᱟᱹᱢᱤ ᱠᱚ ᱩᱫᱩᱜ ᱢᱮ",
    chatbot_chip_ongoing: "⚙️ ᱪᱟᱹᱞᱩ ᱠᱟᱹᱢᱤ ᱠᱚ ᱪᱮᱫ ᱠᱟᱱᱟ?",
    chatbot_chip_available: "📋 ᱦᱟᱛᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱠᱚ",
    chatbot_chip_id: "🔍 AAPV-2026-0842 ᱨᱮᱭᱟᱜ ᱦᱟᱞᱚᱛ",
    floating_ask_ai: "AI ᱜᱚᱲᱚᱭᱤᱡ ᱠᱩᱞᱤᱭᱮᱢ",
    floating_jump_section: "ᱯᱩᱨᱟᱹ ᱪᱮᱴᱵᱚᱴ ᱦᱟᱹᱴᱤᱧ ᱛᱮ ᱪᱟᱞᱟᱜ ᱢᱮ",
    floating_close_btn: "AI ᱜᱚᱲᱚᱭᱤᱡ ᱵᱚᱸᱫᱽ ᱢᱮ",

    // Voice Narration & Audio Reader Showcase
    audio_guide_bar_title: "ᱟᱲᱟᱝ ᱱᱮᱨᱮᱥᱚᱱ ᱟᱨ ᱟᱰᱤᱭᱳ ᱜᱟᱭᱤᱰ",
    audio_guide_bar_desc: "ᱡᱟᱦᱟᱸᱱ ᱥᱯᱤᱠᱟᱨ 🔊 ᱪᱮᱛᱟᱱ ᱨᱮ ᱚᱛᱟᱭ ᱢᱮ ᱥᱮ ᱟᱢᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱛᱮ ᱟᱸᱡᱚᱢ ᱞᱟᱹᱜᱤᱫ 'ᱥᱟᱦᱴᱟ ᱟᱸᱡᱚᱢ' ᱨᱮ ᱚᱛᱟᱭ ᱢᱮ᱾",
    btn_read_page: "ᱥᱟᱱᱟᱢ ᱥᱟᱦᱴᱟ ᱟᱸᱡᱚᱢ ᱢᱮ",
    btn_stop_audio: "ᱛᱷᱟᱢᱵᱷᱟᱣ ᱢᱮ",
    narrate_btn_label: "ᱟᱸᱡᱚᱢ ᱢᱮ",
    narrate_btn_speaking: "ᱛᱷᱟᱢᱵᱷᱟᱣ ⏹",
    toast_audio_showcase: "ᱟᱰᱤᱭᱳ ᱜᱟᱭᱤᱰ (Showcase Mode): ᱚᱞ ᱪᱤᱱᱦᱟᱹᱣ ᱮᱱᱟ᱾",
    toast_audio_stopped: "ᱟᱰᱤᱭᱳ ᱱᱮᱨᱮᱥᱚᱱ ᱛᱷᱟᱢᱵᱷᱟᱣ ᱮᱱᱟ᱾",

    // Material-Matched Contact Us Section
    contact_eyebrow: "ᱜᱚᱲᱚ ᱟᱨ ᱥᱚᱦᱚᱫ • ᱟᱹᱛᱩ ᱦᱚᱲ ᱜᱚᱲᱚ",
    contact_title: "ᱜᱚᱲᱚ ᱞᱟᱹᱠᱛᱤ? AapV ᱥᱚᱦᱚᱫ ᱥᱟᱶ ᱡᱚᱯᱚᱲᱟᱣᱜ ᱢᱮ",
    contact_desc: "ᱯᱷᱳᱱ ᱦᱮᱞᱯᱞᱟᱭᱤᱱ, ᱤᱢᱮᱞ ᱥᱮ ᱣᱟᱴᱥᱮᱯ ᱛᱮ ᱟᱞᱮ ᱨᱤᱱ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱜᱚᱲᱚ ᱴᱤᱢ ᱥᱟᱞᱟᱜ ᱡᱚᱲᱟᱣᱜ ᱢᱮ᱾",
    contact_call_title: "ᱴᱳᱞ-ᱯᱷᱨᱤ ᱦᱮᱞᱯᱞᱟᱭᱤᱱ",
    contact_call_desc: "ᱟᱞᱮ ᱨᱤᱱ ᱟᱹᱛᱩ ᱦᱚᱲ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱚᱯᱷᱤᱥᱚᱨ ᱥᱟᱶ ᱥᱚᱡᱷᱮ ᱨᱚᱯᱚᱲ ᱢᱮ᱾ ᱒᱔/᱗ ᱪᱟᱹᱞᱩ ᱢᱮᱱᱟᱜ-ᱟ᱾",
    contact_call_btn: "📞 ᱦᱮᱞᱯᱞᱟᱭᱤᱱ ᱨᱮ ᱯᱷᱳᱱ ᱢᱮ (1800-345-6789)",
    contact_call_sub: "ᱴᱳᱞ-ᱯᱷᱨᱤ: 1800-345-6789 | ᱨᱟᱺᱪᱤ ᱦᱮᱰᱠᱣᱟᱴᱚᱨ: +91 651 2400000",
    contact_email_title: "ᱤᱢᱮᱞ ᱜᱚᱲᱚ ᱰᱮᱥᱠ",
    contact_email_desc: "ᱟᱢᱟᱜ ᱠᱩᱠᱞᱤ, ᱠᱟᱜᱚᱡᱽ ᱥᱮ ᱪᱤᱛᱟᱹᱨ ᱵᱷᱮᱡᱟᱭ ᱢᱮ᱾ ᱡᱚᱛᱚ ᱠᱟᱛᱷᱟ ᱨᱮ ᱴᱨᱟᱠᱤᱝ ᱱᱚᱢᱵᱚᱨ ᱧᱟᱢᱚᱜ-ᱟ᱾",
    contact_email_btn: "✉️ ᱥᱚᱨᱠᱟᱨᱤ ᱤᱢᱮᱞ ᱵᱷᱮᱡᱟᱭ ᱢᱮ",
    contact_email_sub: "support-aapv@jharkhand.gov.in (ᱛᱮᱞᱟ ᱚᱠᱛᱚ: ᱒᱔-᱔᱘ ᱜᱷᱟᱱᱴᱟ)",
    contact_whatsapp_title: "ᱣᱟᱴᱥᱮᱯ ᱨᱮ ᱨᱚᱯᱚᱲ ᱢᱮ",
    contact_whatsapp_desc: "ᱣᱟᱴᱥᱮᱯ ᱨᱮ ᱟᱲᱟᱝ ᱵᱷᱮᱡᱟᱭ ᱢᱮ, ᱪᱤᱛᱟᱹᱨ ᱮᱢ ᱢᱮ ᱟᱨ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱨᱮᱭᱟᱜ ᱦᱟᱞᱚᱛ ᱧᱮᱞ ᱢᱮ᱾",
    contact_whatsapp_btn: "💬 ᱣᱟᱴᱥᱮᱯ ᱨᱮ ᱨᱚᱯᱚᱲ ᱢᱮ",
    contact_whatsapp_sub: "+91 98765 43210 (ᱚᱯᱷᱤᱥᱚᱨ ᱜᱚᱲᱚ)",

    // Portal Footer
    footer_desc: "ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮ ᱟᱹᱛᱩ ᱦᱚᱲ ᱟᱲᱟᱝ ᱥᱟᱶ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱠᱷᱚᱸᱫᱽᱨᱚᱸᱫᱽ ᱟᱨ ᱥᱚᱞᱦᱮ ᱡᱚᱲᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱢᱤᱫ ᱰᱤᱡᱤᱴᱟᱞ ᱠᱟᱹᱢᱤᱦᱚᱨᱟ᱾",
    footer_copy: "© ᱒᱐᱒᱖ ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱥᱚᱨᱠᱟᱨ ᱟᱨ ᱜᱟᱛᱮ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱠᱚ᱾ ᱡᱚᱛᱚ ᱟᱹᱭᱫᱟᱹᱨᱤ ᱫᱚᱦᱚ ᱮᱱᱟ᱾",

    // Admin Page
    admin_eyebrow: "ᱯᱚᱱᱚᱛ ᱥᱟᱥᱚᱱ",
    admin_title: "ᱱᱟᱶᱟ ᱩᱭᱦᱟᱹᱨ ᱠᱚᱢᱟᱱᱰ ᱛᱟᱞᱢᱟ",
    admin_subtitle: "ᱥᱟᱶᱛᱟ ᱨᱮᱭᱟᱜ ᱟᱲᱟᱝ ᱠᱷᱚᱱ ᱧᱮᱞᱚᱜ ᱠᱟᱹᱢᱤ ᱫᱷᱟᱹᱵᱤᱡ᱾",
    btn_download_report: "ᱨᱤᱯᱳᱨᱴ ᱰᱟᱣᱩᱱᱞᱳᱰ ᱢᱮ",
    metric_admin_submitted: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱮᱢ ᱟᱠᱟᱱ",
    metric_admin_validated: "ᱯᱩᱨᱟᱹᱣ ᱥᱟᱹᱵᱤᱛ",
    metric_admin_active: "ᱪᱟᱹᱞᱩ ᱯᱨᱚᱡᱮᱠᱴ ᱠᱚ",
    metric_admin_completed: "ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱ",
    admin_problems_domain: "ᱛᱷᱚᱠ ᱞᱮᱠᱟᱛᱮ ᱮᱴᱠᱮᱴᱚᱬᱮ",
    admin_last_90: "ᱯᱟᱨᱚᱢᱮᱱ ᱙᱐ ᱢᱟᱦᱟᱸ ▾",
    domain_healthcare: "ᱦᱚᱲᱢᱚ ᱥᱟᱶᱟᱨ",
    domain_education: "ᱥᱮᱪᱮᱫ",
    domain_agriculture: "ᱪᱟᱥ-ᱵᱟᱥ",
    domain_environment: "ᱯᱚᱨᱤᱵᱮᱥ",
    domain_water: "ᱫᱟᱜ ᱥᱟᱫᱷᱚᱱ",
    admin_triage_queue: "AI ᱪᱟᱞᱟᱣ ᱞᱟᱭᱤᱱ",
    admin_pending_pill: "᱓᱘ ᱵᱟᱹᱠᱤ",
    admin_q1_title: "ᱠᱚᱞ ᱫᱟᱜ ᱵᱟᱹᱲᱤᱡ",
    admin_q1_meta: "ᱜᱤᱨᱤᱰᱤᱦ • ᱫᱟᱜ • ᱩᱥᱩᱞ",
    admin_q2_title: "ᱟᱥᱲᱟ ᱯᱟᱭᱠᱷᱟᱱᱟ ᱨᱟᱹᱯᱩᱫ",
    admin_q2_meta: "ᱫᱩᱢᱠᱟᱹ • ᱥᱮᱪᱮᱫ • ᱛᱟᱞᱟᱢᱟᱞᱟ",
    admin_q3_title: "ᱪᱟᱥ ᱫᱟᱜ ᱮᱢ ᱚᱠᱛᱚ",
    admin_q3_meta: "ᱦᱟᱡᱟᱨᱤᱵᱟᱜᱽ • ᱪᱟᱥ • ᱠᱚᱢ",
    btn_review: "ᱧᱮᱞ ᱵᱤᱰᱟᱹᱣ ᱢᱮ",
    admin_district_activity: "ᱡᱤᱞᱟᱹ ᱠᱟᱹᱢᱤᱦᱚᱨᱟ",
    admin_submissions_count: "᱒,᱔᱘᱑ ᱮᱢ ᱟᱠᱟᱱ",
    admin_map_placeholder: "ᱡᱤᱞᱟᱹ ᱢᱮᱯ",

    // University Page
    univ_eyebrow: "ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱠᱟᱹᱢᱤ ᱴᱷᱟᱶ",
    univ_title: "ᱟᱢᱟᱜ ᱜᱮᱭᱟᱱ ᱥᱟᱶ ᱢᱮᱲᱟᱜ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱠᱚ",
    univ_subtitle: "ᱴᱚᱴᱷᱟᱠᱤᱭᱟᱹ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱠᱚ ᱧᱟᱢ ᱢᱮ ᱡᱟᱦᱟᱸᱨᱮ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱟᱨ ᱢᱟᱪᱮᱛ ᱵᱚᱫᱚᱞ ᱠᱚ ᱟᱹᱜᱩ ᱫᱟᱲᱮᱭᱟᱜ-ᱟ᱾",
    btn_create_project: "+ ᱱᱟᱶᱟ ᱯᱨᱚᱡᱮᱠᱴ ᱵᱮᱱᱟᱣ ᱢᱮ",
    univ_ai_rec: "AI ᱥᱚᱞᱦᱟ",
    univ_match_heading: "᱔ ᱜᱚᱴᱟᱝ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱟᱯᱮ ᱞᱟᱹᱜᱤᱫ ᱥᱚᱨᱮᱥ ᱢᱮᱲᱟᱜ ᱠᱟᱱᱟ",
    univ_match_desc: "ᱵᱤᱵᱷᱟᱜᱽ, ᱠᱷᱚᱸᱫᱽᱨᱚᱸᱫᱽ ᱴᱚᱴᱷᱟ, ᱢᱟᱪᱮᱛ ᱦᱩᱱᱟᱹᱨ ᱟᱨ ᱥᱩᱵᱤᱫᱷᱟ ᱞᱮᱠᱟᱛᱮ᱾",
    univ_avg_match: "% ᱜᱩᱴ ᱢᱮᱲᱟᱜ",
    univ_p1_title: "ᱠᱚᱢ ᱠᱷᱚᱨᱪᱟ ᱟᱹᱛᱩ ᱫᱟᱜ ᱥᱟᱯᱷᱟ",
    univ_p1_meta: "ᱫᱩᱢᱠᱟᱹ • ᱩᱥᱩᱞ ᱢᱟᱱ",
    univ_p1_chips: "ᱯᱚᱨᱤᱵᱮᱥ ᱤᱸᱡᱤ. · ᱨᱚᱥᱟᱭᱚᱱ · ᱵᱟᱭᱳᱴᱮᱠ",
    univ_p2_title: "IoT ᱦᱟᱥᱟ ᱟᱞᱚᱫ ᱧᱮᱞ",
    univ_p2_meta: "ᱦᱟᱡᱟᱨᱤᱵᱟᱜᱽ • ᱛᱟᱞᱟᱢᱟᱞᱟ ᱢᱟᱱ",
    univ_p2_chips: "ᱤᱞᱮᱠᱴᱨᱳᱱᱤᱠᱥ · IoT · ᱪᱟᱥ",
    univ_p3_title: "ᱟᱹᱛᱩ ᱯᱞᱟᱥᱴᱤᱠ ᱡᱟᱣᱨᱟ",
    univ_p3_meta: "ᱨᱟᱺᱪᱤ • ᱩᱥᱩᱞ ᱢᱟᱱ",
    univ_p3_chips: "ᱥᱤᱵᱷᱤᱞ ᱤᱸᱡᱤ. · ᱯᱚᱨᱤᱵᱮᱥ · ᱰᱮᱴᱟ",
    btn_review_challenge: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱵᱤᱰᱟᱹᱣ ᱢᱮ",
    univ_active_title: "ᱪᱟᱹᱞᱩ ᱯᱨᱚᱡᱮᱠᱴ · ᱟᱹᱛᱩ ᱫᱟᱜ ᱥᱟᱯᱷᱟ",
    univ_active_pill: "ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ ᱴᱮᱥᱴ",
    univ_mentor_label: "ᱫᱤᱥᱟᱹ-ᱩᱫᱩᱜᱤᱡ",
    univ_students_label: "᱔ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ",
    univ_industry_partner: "ᱠᱟᱹᱨᱜᱟᱲ ᱜᱟᱛᱮ",
    step_analysis: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱵᱤᱪᱟᱹᱨ",
    step_design: "ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ ᱵᱮᱱᱟᱣ",
    step_testing: "ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ ᱴᱮᱥᱴ",
    step_deployment: "ᱴᱚᱴᱷᱟ ᱨᱮ ᱪᱟᱹᱞᱩ",
    step_impact: "ᱚᱨᱡᱚ ᱡᱚᱠᱷᱟ",

    // Industry Page
    ind_eyebrow: "ᱠᱟᱹᱨᱜᱟᱲ ᱟᱨ CSR",
    ind_title: "ᱥᱚᱞᱦᱮ ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱧᱟᱢ ᱢᱮ᱾",
    ind_subtitle: "ᱠᱟᱹᱣᱰᱤ, ᱜᱮᱭᱟᱱ, ᱥᱟᱢᱟᱱ ᱮᱢ ᱠᱟᱛᱮ ᱯᱨᱚᱡᱮᱠᱴ ᱠᱚ ᱜᱚᱲᱚᱣᱟᱜ ᱢᱮ᱾",
    btn_my_commitments: "ᱤᱧᱟᱜ ᱜᱚᱲᱚ ᱠᱚ",
    ind_search_placeholder: "ᱯᱨᱚᱡᱮᱠᱴ, ᱦᱩᱱᱟᱹᱨ, ᱡᱤᱞᱟᱹ ᱥᱮᱸᱫᱽᱨᱟᱭ ᱢᱮ…",
    btn_all_domains: "ᱡᱚᱛᱚ ᱛᱷᱚᱠ ▾",
    btn_support_needed: "ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱜᱚᱲᱚ ▾",
    ind_req_total: "ᱜᱩᱴ ᱞᱟᱹᱠᱛᱤ",
    btn_i_can_help: "ᱤᱧ ᱜᱚᱲᱚ ᱫᱟᱲᱮᱭᱟᱜ-ᱟᱹᱧ",
    ind_impact_title: "ᱟᱢᱟᱜ ᱚᱨᱡᱚ",
    ind_stat_committed: "ᱠᱟᱹᱣᱰᱤ ᱜᱚᱲᱚ",
    ind_stat_supported: "ᱜᱚᱲᱚ ᱟᱠᱟᱱ ᱯᱨᱚᱡᱮᱠᱴ",
    ind_stat_districts: "ᱥᱮᱴᱮᱨ ᱟᱠᱟᱱ ᱡᱤᱞᱟᱹ",
    ind_stat_people: "ᱚᱨᱡᱚ ᱧᱟᱢ ᱟᱠᱟᱫ ᱦᱚᱲ",

    // University Why Help Us
    univ_why_eyebrow: "ᱪᱮᱫᱟᱜ ᱥᱮᱞᱮᱫᱚᱜ-ᱟ? • ᱚᱞᱚᱜ ᱯᱟᱲᱦᱟᱣ ᱟᱨ ᱠᱟᱹᱢᱤ ᱞᱟᱵᱷ",
    univ_why_title: "ᱟᱢᱨᱮᱱ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚ AapV ᱨᱮ ᱪᱮᱫᱟᱜ ᱮᱢ ᱟᱹᱜᱩ ᱠᱚᱣᱟ? ᱱᱚᱸᱰᱮ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱪᱮᱫ ᱮ ᱧᱟᱢᱟ᱾",
    univ_why_subtitle: "ᱟᱞᱮ ᱵᱟᱰᱟᱭᱟ ᱢᱟᱪᱮᱛ ᱠᱚᱣᱟᱜ ᱚᱠᱛᱚ ᱠᱚᱢ ᱜᱮᱭᱟ ᱟᱨ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚᱣᱟᱜ ᱯᱟᱲᱦᱟᱣ ᱵᱷᱟᱨ ᱢᱮᱱᱟᱜ-ᱟ᱾ AapV ᱫᱚ ᱠᱷᱟᱹᱞᱤ ᱢᱤᱫᱴᱟᱹᱝ ᱦᱮᱯᱨᱟᱣ ᱵᱟᱝ ᱠᱟᱱᱟ᱾ ᱱᱚᱣᱟ ᱫᱚ ᱥᱚᱨᱠᱟᱨᱤ ᱟᱹᱱ ᱯᱩᱨᱟᱹᱣ, ᱠᱷᱚᱸᱫᱽᱨᱚᱸᱫᱽ ᱠᱟᱹᱣᱰᱤ ᱧᱟᱢ ᱟᱨ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚᱣᱟᱜ ᱱᱟᱯᱟᱭ ᱠᱟᱹᱢᱤ ᱧᱟᱢ ᱨᱮ ᱜᱚᱲᱚ ᱮᱢᱟᱭ᱾",
    univ_why_c1_tag: "ᱥᱮᱪᱮᱫ ᱟᱹᱱ",
    univ_why_c1_title: "NEP 2020 ᱯᱩᱨᱟᱹᱣ, ᱥᱮᱪᱮᱫ ᱨᱮ ᱥᱮᱞᱮᱫ",
    univ_why_c1_desc: "ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ ᱥᱮᱪᱮᱫ ᱱᱤᱛᱤ (NEP 2020) ᱞᱮᱠᱟᱛᱮ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚ ᱥᱟᱶᱛᱟ ᱠᱟᱹᱢᱤ ᱟᱨ ᱵᱮᱵᱷᱟᱨᱤᱠ ᱜᱮᱭᱟᱱ ᱮᱢ ᱞᱟᱹᱠᱛᱤ ᱠᱟᱱᱟ᱾ ᱱᱟᱶᱟ ᱠᱟᱹᱢᱤ ᱯᱟᱱᱛᱷᱟ ᱵᱮᱱᱟᱣ ᱵᱚᱫᱚᱞ ᱛᱮ, ᱟᱢᱟᱜ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ AapV ᱨᱮᱱᱟᱜ ᱥᱟᱹᱨᱤ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱠᱚ ᱥᱮᱢᱤᱥᱴᱟᱨ ᱠᱨᱮᱰᱤᱴ ᱞᱮᱠᱟᱛᱮ ᱵᱮᱵᱷᱟᱨ ᱫᱟᱲᱮᱭᱟᱜ-ᱟ᱾",
    univ_why_c2_tag: "ᱠᱷᱚᱸᱫᱽᱨᱚᱸᱫᱽ ᱠᱟᱹᱣᱰᱤ",
    univ_why_c2_title: "ᱥᱚᱨᱠᱟᱨᱤ ᱠᱷᱚᱸᱫᱽᱨᱚᱸᱫᱽ ᱠᱟᱹᱣᱰᱤ (DST & MeitY) ᱧᱟᱢ",
    univ_why_c2_desc: "ᱠᱷᱟᱹᱞᱤ ᱠᱟᱜᱚᱡᱽ ᱯᱨᱚᱡᱮᱠᱴ ᱫᱚ ᱥᱚᱨᱠᱟᱨ ᱵᱟᱭ ᱦᱟᱛᱟᱣᱟ᱾ ᱡᱚᱠᱷᱚᱱ ᱟᱢᱨᱮᱱ ᱢᱟᱪᱮᱛ ᱠᱚ AapV ᱨᱮᱱᱟᱜ ᱥᱟᱹᱨᱤ ᱥᱟᱶᱛᱟ ᱞᱟᱹᱠᱛᱤ ᱟᱨ ᱠᱟᱹᱨᱜᱟᱲ ᱜᱚᱲᱚ ᱥᱟᱶ DST ᱥᱮ MeitY ᱨᱮ ᱟᱵᱮᱫᱚᱱ ᱠᱚ ᱮᱢᱟ, ᱠᱟᱹᱣᱰᱤ ᱧᱟᱢ ᱨᱮᱱᱟᱜ ᱫᱟᱣ ᱟᱹᱰᱤ ᱰᱷᱮᱨᱚᱜ-ᱟ᱾",
    univ_why_c3_tag: "ᱠᱟᱹᱢᱤ ᱧᱟᱢ ᱯᱳᱨᱴᱯᱷᱳᱞᱤᱭᱳ",
    univ_why_c3_title: "ᱵᱷᱮᱜᱟᱨ ᱩᱯᱨᱩᱢ: ᱥᱟᱹᱨᱤ ᱠᱟᱹᱢᱤ, ᱵᱟᱝ ᱠᱚᱯᱤ ᱯᱨᱚᱡᱮᱠᱴ",
    univ_why_c3_desc: "ᱠᱟᱹᱢᱤ ᱮᱢᱚᱜ ᱠᱚᱢᱯᱟᱱᱤ ᱠᱚ ᱢᱤᱫ ᱞᱮᱠᱟᱱ ᱠᱚᱯᱤ ᱣᱮᱵᱽᱥᱟᱭᱤᱴ ᱧᱮᱞ ᱠᱟᱛᱮ ᱠᱚ ᱞᱟᱸᱜᱟ ᱮᱱᱟ᱾ ᱡᱚᱠᱷᱚᱱ ᱟᱢᱨᱮᱱ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱫᱩᱢᱠᱟᱹ ᱨᱮ ᱫᱟᱜ ᱥᱮᱱᱥᱚᱨ ᱥᱮ ᱓,᱐᱐᱐ ᱦᱚᱲᱟᱜ ᱯᱞᱟᱥᱴᱤᱠ ᱥᱟᱯᱷᱟ ᱠᱟᱹᱢᱤ ᱨᱮᱱᱟᱜ ᱥᱟᱹᱨᱤ ᱯᱨᱚᱡᱮᱠᱴ ᱠᱚ ᱩᱫᱩᱜᱟ, ᱩᱱᱠᱩ ᱞᱚᱜᱚᱱ ᱟᱨ ᱵᱟᱹᱲᱛᱤ ᱠᱟᱹᱣᱰᱤ ᱛᱮ ᱠᱟᱹᱢᱤ ᱠᱚ ᱧᱟᱢᱟ᱾",
    univ_why_c4_tag: "ᱨᱮᱝᱠᱤᱝ ᱵᱟᱹᱲᱛᱤ",
    univ_why_c4_title: "ᱢᱩᱬ ᱠᱷᱚᱸᱫᱽᱨᱚᱸᱫᱽ ᱰᱮᱴᱟ, ᱯᱮᱴᱮᱱᱴ ᱟᱨ NIRF ᱨᱮ ᱞᱟᱦᱟ",
    univ_why_c4_desc: "ᱟᱹᱛᱩ ᱴᱚᱴᱷᱟ ᱨᱮᱱᱟᱜ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱠᱷᱚᱱ ᱱᱚᱝᱠᱟᱱ ᱰᱮᱴᱟ ᱧᱟᱢᱚᱜ-ᱟ ᱡᱟᱦᱟᱸ ᱫᱚ ᱯᱚᱛᱚᱵ ᱨᱮ ᱵᱟᱹᱱᱩᱜ-ᱟ᱾ ᱢᱟᱪᱮᱛ ᱟᱨ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚ ᱱᱟᱶᱟ ᱠᱟᱜᱚᱡᱽ ᱪᱷᱟᱯᱟ, ᱯᱮᱴᱮᱱᱴ ᱦᱟᱛᱟᱣ ᱟᱨ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱨᱮᱱᱟᱜ NAAC ᱟᱨ NIRF ᱨᱮᱝᱠ ᱠᱚ ᱩᱥᱩᱞ ᱫᱟᱲᱮᱭᱟᱜ-ᱟ᱾",
    univ_why_cta_text: "ᱟᱢᱨᱮᱱ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱟᱨ ᱢᱟᱪᱮᱛ ᱠᱚ ᱥᱟᱹᱨᱤ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱥᱚᱞᱦᱮ ᱞᱟᱹᱜᱤᱫ ᱮᱢ ᱛᱮᱭᱟᱨ ᱟᱠᱟᱫ ᱠᱚᱣᱟ?",
    univ_why_cta_btn: "ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱞᱮᱵᱽ ᱨᱮᱡᱤᱥᱴᱟᱨ ᱢᱮ",

    // Industry Why Help Us
    ind_why_eyebrow: "AapV ᱥᱟᱶ ᱪᱮᱫᱟᱜ ᱜᱟᱛᱮᱜ-ᱟ? • ᱥᱟᱹᱨᱤ ᱵᱮᱯᱟᱨ ᱞᱟᱵᱷ (ROI)",
    ind_why_title: "ᱟᱹᱛᱩ ᱴᱚᱴᱷᱟ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱪᱮᱫᱟᱜ ᱮᱢ ᱥᱚᱞᱦᱮᱭᱟ? ᱵᱮᱯᱟᱨ ᱠᱟᱛᱷᱟ ᱞᱟᱹᱭ ᱢᱮ᱾",
    ind_why_subtitle: "ᱟᱞᱮ ᱵᱟᱰᱟᱭᱟ ᱵᱮᱯᱟᱨ ᱫᱚ ᱠᱷᱟᱹᱞᱤ ᱫᱟᱭᱟ ᱛᱮ ᱵᱟᱝ ᱪᱟᱞᱟᱜ-ᱟ, ᱞᱟᱵᱷ ᱞᱟᱹᱠᱛᱤᱭᱟ᱾ AapV ᱛᱟᱞᱟ ᱛᱮ ᱥᱟᱶᱛᱟ ᱯᱨᱚᱡᱮᱠᱴ ᱨᱮ ᱜᱚᱲᱚ ᱮᱢ ᱫᱚ ᱫᱟᱱ ᱥᱩᱢᱩᱝ ᱵᱟᱝ ᱠᱟᱱᱟ — ᱱᱚᱣᱟ ᱫᱚ ᱢᱤᱫ ᱱᱟᱯᱟᱭ ᱠᱷᱚᱨᱚᱪ ᱠᱟᱱᱟ ᱡᱟᱦᱟᱸ ᱫᱚ ᱱᱟᱶᱟ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱧᱟᱢ, ᱥᱟᱢᱟᱱ ᱯᱚᱨᱠᱷᱟᱣ ᱟᱨ ᱦᱚᱲᱟᱜ ᱯᱟᱹᱛᱭᱟᱹᱣ ᱵᱟᱹᱲᱛᱤᱭᱟ᱾",
    ind_why_c1_tag: "ᱦᱩᱱᱟᱹᱨ ᱠᱟᱹᱢᱤᱭᱟᱹ",
    ind_why_c1_title: "ᱞᱟᱦᱟ ᱠᱷᱚᱱ ᱦᱩᱱᱟᱹᱨ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱧᱟᱢ",
    ind_why_c1_desc: "ᱥᱟᱫᱷᱟᱨᱚᱱ ᱤᱱᱴᱟᱨᱵᱷᱤᱭᱩ ᱨᱮ ᱠᱷᱟᱹᱞᱤ ᱢᱩᱠᱷᱚᱥᱛᱷᱚ ᱵᱤᱰᱟᱹᱣᱚᱜ-ᱟ, ᱠᱟᱹᱢᱤ ᱫᱟᱲᱮ ᱫᱚ ᱵᱟᱝ᱾ ᱡᱚᱠᱷᱚᱱ ᱟᱢ ᱥᱟᱹᱨᱤ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱨᱮ ᱜᱚᱲᱚ ᱮᱢ ᱮᱢᱟ, ᱟᱢ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚᱣᱟᱜ ᱥᱟᱹᱨᱤ ᱠᱟᱹᱢᱤ ᱫᱟᱲᱮ ᱧᱮᱞ ᱫᱟᱲᱮᱭᱟᱜ-ᱟᱢ᱾ ᱟᱢ ᱟᱢᱟᱜ ᱠᱟᱹᱢᱤ ᱵᱟᱰᱟᱭ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱞᱚᱜᱚᱱ ᱮᱢ ᱧᱟᱢ ᱠᱚᱣᱟ, ᱡᱟᱦᱟᱸ ᱛᱮ ᱵᱟᱦᱟᱞ ᱠᱷᱚᱨᱚᱪ ᱟᱹᱰᱤ ᱠᱚᱢᱚᱜ-ᱟ᱾",
    ind_why_c2_tag: "ᱵᱟᱡᱟᱨ ᱯᱚᱨᱠᱷᱟᱣ",
    ind_why_c2_title: "ᱟᱹᱛᱩ ᱵᱟᱡᱟᱨ ᱯᱚᱨᱠᱷᱟᱣ: ᱵᱤᱱ ᱠᱟᱹᱣᱰᱤ ᱴᱮᱥᱴᱤᱝ ᱴᱷᱟᱶ",
    ind_why_c2_desc: "ᱢᱟᱨᱟᱝ ᱥᱚᱦᱚᱨ ᱨᱮ ᱫᱩᱲᱩᱵ ᱠᱟᱛᱮ ᱟᱹᱛᱩ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱢᱟᱱ ᱵᱮᱱᱟᱣ ᱫᱚ ᱟᱸᱴ ᱜᱮᱭᱟ᱾ ᱡᱩᱫᱤ ᱟᱢ ᱪᱟᱥ, ᱥᱤᱛᱩᱝ ᱵᱤᱡᱽᱞᱤ, ᱤᱵᱷᱤ ᱵᱮᱴᱟᱨᱤ ᱥᱮ ᱥᱟᱯᱷᱟ ᱥᱟᱢᱟᱱ ᱵᱮᱱᱟᱣᱮᱫ-ᱟᱢ, ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱱᱟᱜ ᱡᱤᱞᱟᱹ ᱠᱚ ᱫᱚ ᱱᱟᱯᱟᱭ ᱯᱚᱨᱠᱷᱟᱣ ᱴᱷᱟᱶ ᱠᱟᱱᱟ᱾ ᱢᱟᱨᱟᱝ ᱠᱷᱚᱨᱚᱪ ᱞᱟᱦᱟ ᱨᱮ ᱥᱟᱹᱨᱤ ᱵᱮᱵᱷᱟᱨᱤᱭᱟᱹ ᱠᱷᱚᱱ ᱯᱚᱨᱠᱷᱟᱣ ᱧᱟᱢ ᱢᱮ᱾",
    ind_why_c3_tag: "ᱯᱷᱟᱨᱪᱟ CSR",
    ind_why_c3_title: "ᱯᱟᱹᱛᱭᱟᱹᱣᱟᱱ CSR: ᱑᱐᱐% ᱯᱷᱟᱨᱪᱟ, ᱵᱳᱨᱰ-ᱨᱮᱰᱤ ᱚᱨᱡᱚ",
    ind_why_c3_desc: "ᱞᱟᱹᱠᱛᱤᱭᱟᱱ CSR ᱠᱟᱹᱣᱰᱤ ᱟᱭᱢᱟ ᱫᱷᱟᱣ ᱵᱮᱠᱟᱨ ᱪᱟᱞᱟᱜ-ᱟ᱾ AapV ᱥᱟᱶ, ᱡᱚᱛᱚ ᱴᱟᱠᱟ ᱨᱮᱱᱟᱜ ହିᱥᱟᱹᱵᱽ ᱚᱯᱮᱱ ᱰᱮᱥᱵᱳᱨᱰ ᱨᱮ ᱧᱮᱞᱚᱜ-ᱟ᱾ ᱟᱢ ᱧᱮᱞ ᱫᱟᱲᱮᱭᱟᱜ-ᱟᱢ ᱠᱚᱲ ᱫᱟᱜ ᱡᱩᱛ, ᱥᱳᱞᱟᱨ ᱵᱮᱵᱚᱥᱛᱷᱟ ᱥᱮ ᱥᱮᱱᱥᱚᱨ ᱞᱟᱜᱟᱣ — ᱚᱠᱛᱚ ᱥᱟᱶ ᱪᱤᱛᱟᱹᱨ ᱟᱨ ᱦᱚᱲᱟᱜ ᱢᱚᱱᱮ ᱵᱟᱰᱟᱭ ᱥᱟᱶᱛᱮ᱾",
    ind_why_c4_tag: "ᱥᱟᱶᱛᱟ ᱯᱟᱹᱛᱭᱟᱹᱣ",
    ind_why_c4_title: "ᱥᱟᱶᱛᱟ ᱯᱟᱹᱛᱭᱟᱹᱣ ᱟᱨ ᱞᱚᱜᱚᱱ ᱥᱚᱨᱠᱟᱨᱤ ᱪᱷᱟᱹᱲ",
    ind_why_c4_desc: "ᱠᱟᱹᱨᱜᱟᱲ ᱟᱨ ᱠᱷᱟᱫᱟᱱ ᱴᱚᱴᱷᱟ ᱨᱮ ᱠᱟᱹᱢᱤ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱶᱛᱟ ᱨᱮᱱᱟᱜ ᱯᱟᱹᱛᱭᱟᱹᱣ ᱟᱹᱰᱤ ᱞᱟᱹᱠᱛᱤᱭᱟ᱾ ᱡᱤᱞᱟᱹ ᱥᱟᱥᱚᱱ ᱥᱟᱶ ᱢᱮᱥᱟ ᱠᱟᱛᱮ ᱴᱚᱴᱷᱟ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱥᱚᱞᱦᱮ ᱞᱮᱠᱷᱟᱱ ᱦᱚᱲ ᱟᱨ ᱥᱚᱨᱠᱟᱨ ᱥᱟᱶ ᱱᱟᱯᱟᱭ ᱥᱟᱹᱜᱟᱹᱭ ᱵᱮᱱᱟᱣᱜ-ᱟ, ᱡᱟᱦᱟᱸ ᱛᱮ ᱠᱟᱹᱢᱤ ᱪᱷᱟᱹᱲ ᱞᱚᱜᱚᱱ ᱧᱟᱢᱚᱜ-ᱟ᱾",
    ind_why_cta_text: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱥᱚᱞᱦᱮ ᱥᱟᱶᱛᱮ ᱥᱟᱹᱨᱤ ᱵᱮᱯᱟᱨ ᱞᱟᱵᱷ ᱧᱟᱢ ᱞᱟᱹᱜᱤᱫ ᱮᱢ ᱛᱮᱭᱟᱨ ᱟᱠᱟᱱᱟ?",
    ind_why_cta_btn: "ᱛᱮᱦᱮᱧ ᱜᱮ ᱜᱟᱛᱮᱜ ᱢᱮ",

    // University Auth
    univ_login_btn: "ᱢᱟᱪᱮᱛ ᱟᱨ ᱞᱮᱵᱽ ᱞᱚᱜᱤᱱ",
    univ_login_title: "ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱠᱟᱹᱢᱤ ᱴᱷᱟᱶ ᱞᱚᱜᱤᱱ",
    univ_login_sub: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱠᱚ ᱥᱟᱵ, ᱠᱷᱚᱸᱫᱽᱨᱚᱸᱫᱽ ᱠᱟᱹᱣᱰᱤ ᱧᱟᱢ ᱟᱨ ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ ᱵᱮᱱᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱩᱯᱨᱩᱢ ᱛᱮ ᱞᱚᱜᱤᱱ ᱢᱮ᱾",
    univ_label_email: "ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱤᱢᱮᱞ / ᱢᱟᱪᱮᱛ ᱟᱭᱰᱤ",
    univ_label_institution: "ᱥᱚᱝᱥᱛᱷᱟᱱ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
    univ_label_password: "ᱯᱟᱥᱣᱟᱨᱰ / ᱥᱩᱨᱚᱠᱷᱟ ᱪᱟᱹᱵᱷᱤ",
    btn_univ_signin: "ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱯᱳᱨᱴᱟᱞ ᱨᱮ ᱵᱚᱞᱚᱱ ᱢᱮ →",

    // Industry Auth
    ind_login_btn: "ᱠᱟᱹᱨᱜᱟᱲ ᱟᱨ CSR ᱞᱚᱜᱤᱱ",
    ind_login_title: "ᱠᱟᱹᱨᱜᱟᱲ ᱟᱨ CSR ᱜᱟᱛᱮ ᱞᱚᱜᱤᱱ",
    ind_login_sub: "ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ ᱠᱟᱹᱣᱰᱤ ᱜᱚᱲᱚ, ᱦᱩᱱᱟᱹᱨ ᱫᱤᱥᱟᱹ ᱟᱨ CSR ᱚᱨᱡᱚ ᱧᱮᱞ ᱞᱟᱹᱜᱤᱫ ᱞᱚᱜᱤᱱ ᱢᱮ᱾",
    ind_label_email: "ᱠᱟᱹᱨᱜᱟᱲ ᱠᱟᱹᱢᱤ ᱤᱢᱮᱞ",
    ind_label_company: "ᱠᱚᱢᱯᱟᱱᱤ / CSR ᱜᱟᱶᱛᱟ",
    ind_label_password: "ᱠᱟᱹᱨᱜᱟᱲ ᱮᱠᱥᱮᱥ ᱪᱟᱹᱵᱷᱤ",
    btn_ind_signin: "ᱠᱟᱹᱨᱜᱟᱲ ᱯᱳᱨᱴᱟᱞ ᱨᱮ ᱵᱚᱞᱚᱱ ᱢᱮ →",

    // Admin Auth
    admin_login_btn: "ᱥᱟᱥᱚᱱ ᱚᱯᱷᱤᱥᱟᱨ ᱞᱚᱜᱤᱱ",
    admin_login_title: "ᱯᱚᱱᱚᱛ ᱥᱟᱥᱚᱱ ᱠᱚᱢᱟᱱᱰ ᱛᱟᱞᱢᱟ ᱞᱚᱜᱤᱱ",
    admin_login_sub: "ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱥᱚᱨᱠᱟᱨ, ᱵᱤᱵᱷᱟᱜᱽ ᱥᱩᱛᱨᱮᱛ ᱟᱨ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱥᱩᱨᱚᱠᱷᱤᱛ ᱵᱚᱞᱚᱱ ᱴᱷᱟᱶ᱾",
    admin_label_email: "ᱥᱚᱨᱠᱟᱨᱤ ᱤᱢᱮᱞ / ᱚᱯᱷᱤᱥᱟᱨ ᱟᱭᱰᱤ",
    admin_label_dept: "ᱵᱤᱵᱷᱟᱜᱽ / ᱥᱚᱝᱥᱛᱷᱟ",
    admin_label_password: "ᱥᱟᱥᱚᱱ ᱥᱩᱨᱚᱠᱷᱟ ᱯᱤᱱ",
    btn_admin_signin: "ᱠᱚᱢᱟᱱᱰ ᱛᱟᱞᱢᱟ ᱨᱮ ᱵᱚᱞᱚᱱ ᱢᱮ →",

    // Theme Mode
    theme_dark: "ᱫᱟᱨᱠ",
    theme_light: "ᱞᱟᱭᱤᱴ",
    theme_toggle_title: "ᱫᱟᱨᱠ/ᱞᱟᱭᱤᱴ ᱢᱚᱰ ᱵᱚᱫᱚᱞ",

    // 404 Error Page
    page_not_found_title: "404 • ᱥᱟᱦᱴᱟ ᱵᱟᱝ ᱧᱟᱢ ᱞᱮᱱᱟ",
    page_not_found_desc: "ᱡᱟᱦᱟᱸ ᱥᱟᱦᱴᱟ ᱟᱢ ᱯᱟᱱᱛᱮ ᱮᱫᱟ ᱚᱱᱟ ᱵᱟᱹᱱᱩᱜᱼᱟ, ᱚᱪᱚᱜ ᱟᱠᱟᱱᱟ ᱥᱮ ᱩᱪᱟᱹᱲ ᱟᱠᱟᱱᱟ᱾",
    btn_back_home: "ᱱᱟᱹᱜᱟᱹᱨᱤᱭᱟᱹ ᱚᱲᱟᱜ ᱛᱮ ᱨᱩᱣᱟᱹᱲ",

    // Mobile Portal Menu
    portal_sub_citizen: "ᱦᱟᱹᱲᱟᱹᱥ ᱟᱨ ᱥᱚᱞᱦᱮ",
    portal_sub_impact: "ᱞᱟᱭᱤᱵᱽ ᱯᱨᱚᱜᱨᱮᱥ ᱟᱨ ᱞᱮᱠᱷᱟ",
    portal_sub_admin: "ᱯᱚᱧᱪᱟᱭᱚᱛ ᱥᱟᱥᱚᱱ",
    portal_sub_university: "ᱥᱮᱪᱮᱫ ᱟᱨ ᱠᱷᱚᱸᱫᱽᱨᱚᱸᱫᱽ ᱛᱟᱞᱢᱟ",
    portal_sub_industry: "ᱥᱤ.ᱮᱥ.ᱟᱨ. ᱟᱨ ᱱᱤᱡᱮᱨᱟᱜ ᱦᱟᱹᱴᱤᱧ",
    mobile_menu_title: "ᱥᱟᱱᱟᱢ ᱯᱚᱨᱴᱟᱞ",

    // Admin Intelligence & Triage
    admin_report_title: "ᱦᱟᱹᱲᱟᱹᱥ ᱟᱨ ᱚᱨᱥᱚᱝ ᱰᱟᱴᱟ ᱨᱤᱯᱳᱨᱴ",
    admin_report_sub: "Q1-Q3 2026 ᱞᱟᱹᱜᱤᱫ ᱒,᱔᱘᱑ ᱦᱟᱹᱲᱟᱹᱥ, ᱒᱔ ᱦᱚᱱᱚᱛ ᱟᱨ ᱵᱤᱵᱷᱟᱜᱽ ᱥᱚᱞᱦᱮ ᱰᱟᱴᱟ ᱰᱟᱣᱩᱱᱞᱳᱰ ᱢᱮ᱾",
    admin_report_preview_title: "ᱰᱟᱴᱟᱥᱮᱴ ᱛᱮᱛᱮᱫ (ᱞᱟᱭᱤᱵᱽ ᱥᱤᱝᱠ)",
    admin_rep_records: "ᱨᱮᱠᱳᱨᱰ",
    admin_rep_validated: "ᱯᱩᱥᱴᱟᱹᱣ ᱟᱠᱟᱱ",
    admin_rep_districts: "ᱦᱚᱱᱚᱛ",
    btn_export_csv: "ᱯᱩᱨᱟᱹ CSV ᱰᱟᱴᱟᱥᱮᱴ ᱰᱟᱣᱩᱱᱞᱳᱰ ᱢᱮ (.csv)",
    btn_print_summary: "ᱠᱟᱹᱢᱤᱭᱟᱹ PDF ᱨᱤᱯᱳᱨᱴ ᱪᱷᱟᱯᱟ / ᱥᱟᱧᱪᱟᱣ ᱢᱮ",
    triage_lbl_priority: "ᱞᱟᱹᱠᱛᱤ / ᱢᱟᱬᱟᱝ ᱠᱟᱹᱢᱤ",
    triage_lbl_dept: "ᱠᱩᱞ ᱴᱷᱟᱶ ᱵᱤᱵᱷᱟᱜᱽ",
    triage_lbl_notes: "ᱥᱟᱥᱚᱱᱤᱭᱟᱹ ᱱᱳᱴ / ᱠᱟᱹᱢᱤ ᱦᱚᱨᱟ",
    btn_cancel: "ᱵᱟᱹᱛᱤᱞ ᱢᱮ",
    btn_confirm_triage: "ᱴᱤᱠᱮᱴ ᱢᱟᱱᱟᱣ ᱟᱨ ᱠᱩᱞ ᱢᱮ ✓",

    // University Sandbox & Challenges
    univ_modal_badge: "ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱱᱟᱶᱟ ᱩᱭᱦᱟᱹᱨ ᱞᱮᱵᱽ • ᱥᱮᱪᱮᱫ ᱥᱮᱱᱰᱵᱚᱠᱥ",
    univ_create_title: "ᱟᱹᱛᱩ ᱨᱮᱱᱟᱜ R&D ᱯᱨᱳᱡᱮᱠᱴ ᱮᱛᱚᱦᱚᱵ ᱢᱮ",
    univ_create_sub: "NEP ᱠᱨᱮᱰᱤᱴ ᱟᱨ ᱠᱳᱨᱯᱳᱨᱮᱴ CSR ᱜᱚᱲᱚ ᱞᱟᱹᱜᱤᱫ ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱱᱟᱜ ᱯᱩᱥᱴᱟᱹᱣ ᱟᱠᱟᱱ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱨᱮ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱯᱨᱳᱡᱮᱠᱴ ᱨᱮᱡᱤᱥᱴᱟᱨ ᱢᱮ᱾",
    univ_lbl_proj_title: "ᱯᱨᱳᱡᱮᱠᱴ ᱧᱩᱛᱩᱢ *",
    univ_ph_proj_title: "ᱡᱮᱞᱮᱠᱟ: ᱵᱮᱲᱟ ᱫᱟᱲᱮ ᱦᱚᱞᱚᱝ ᱢᱤᱞ ᱚᱴᱳᱢᱮᱥᱚᱱ",
    univ_lbl_college: "ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ / ᱛᱟᱞᱢᱟ *",
    univ_ph_college: "ᱡᱮᱞᱮᱠᱟ: BIT Mesra / NIT Jamshedpur",
    univ_lbl_lead: "ᱢᱮᱱᱴᱚᱨ / ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱟᱹᱭᱩᱨᱤᱭᱟᱹ *",
    univ_ph_lead: "ᱡᱮᱞᱮᱠᱟ: Dr. P. Kumar / Ananya Roy",
    univ_lbl_challenge: "ᱡᱚᱲᱟᱣ ᱟᱠᱟᱱ ᱟᱹᱛᱩ ᱮᱴᱠᱮᱴᱚᱬᱮ",
    univ_lbl_support_req: "ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱵᱟᱦᱨᱮ ᱜᱚᱲᱚ",
    support_funding: "ᱯᱩᱭᱞᱩ ᱜᱚᱲᱚ / ᱯᱷᱟᱱᱰ",
    support_equipment: "ᱦᱟᱨᱰᱣᱮᱭᱟᱨ / ᱥᱮᱱᱥᱚᱨ",
    support_field: "ᱡᱟᱭᱜᱟ ᱨᱮ ᱴᱮᱥᱴ ᱫᱟᱣ",
    support_mfg: "ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ ᱵᱮᱱᱟᱣ ᱟᱨ ᱴᱩᱞᱤᱝ",
    support_mentorship: "ᱠᱳᱨᱯᱳᱨᱮᱴ ᱫᱤᱥᱟᱹ-ᱩᱫᱩᱜ",
    univ_lbl_abstract: "ᱴᱮᱠᱱᱤᱠᱟᱞ ᱛᱮᱛᱮᱫ ᱥᱟᱨᱟᱝᱥᱚ *",
    univ_ph_abstract: "ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ ᱨᱩᱯ, ᱢᱩᱬ ᱴᱮᱠᱱᱳᱞᱳᱡᱤ ᱟᱨ ᱟᱹᱛᱩ ᱚᱨᱥᱚᱝ ᱵᱟᱵᱚᱛ ᱚᱞ ᱢᱮ…",
    btn_submit_proj: "CSR ᱜᱚᱲᱚ ᱞᱟᱹᱜᱤᱫ ᱨᱮᱡᱤᱥᱴᱟᱨ ᱢᱮ ✓",
    btn_print_dossier: "ᱰᱳᱥᱤᱭᱟᱨ ᱪᱷᱟᱯᱟ / ᱥᱟᱧᱪᱟᱣ ᱢᱮ",
    btn_claim_challenge: "ᱞᱮᱵᱽ ᱞᱟᱹᱜᱤᱫ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱦᱟᱛᱟᱣ ᱢᱮ",

    // Industry & CSR
    filter_all_support: "ᱥᱟᱱᱟᱢ ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱜᱚᱲᱚ",
    ind_no_match_title: "ᱟᱢᱟᱜ ᱯᱟᱱᱛᱮ ᱞᱮᱠᱟᱛᱮ ᱪᱮᱫ ᱯᱨᱳᱡᱮᱠᱴ ᱦᱚᱸ ᱵᱟᱝ ᱧᱟᱢ ᱞᱮᱱᱟ",
    ind_no_match_sub: "'ᱥᱟᱱᱟᱢ ᱴᱚᱴᱷᱟ' ᱵᱟᱪᱷᱟᱣ ᱢᱮ ᱥᱮ ᱯᱟᱱᱛᱮ ᱟᱹᱲᱟᱹ ᱥᱟᱯᱷᱟᱭ ᱢᱮ᱾",
    ind_modal_badge: "ᱠᱳᱨᱯᱳᱨᱮᱴ CSR ᱟᱨ ᱱᱟᱶᱟ ᱩᱭᱦᱟᱹᱨ ᱜᱚᱲᱚ",
    ind_pledge_title: "ᱟᱹᱛᱩ ᱱᱟᱶᱟ ᱩᱭᱦᱟᱹᱨ ᱥᱟᱶ ᱡᱚᱲᱟᱣᱜ ᱢᱮ",
    ind_lbl_org: "ᱠᱚᱢᱯᱟᱱᱤ / ᱜᱟᱶᱛᱟ ᱧᱩᱛᱩᱢ *",
    ind_ph_org: "ᱡᱮᱞᱮᱠᱟ: Tata Steel CSR Foundation / JSW",
    ind_lbl_rep: "ᱯᱨᱚᱛᱤᱱᱤᱫᱷᱤ ᱟᱨ ᱯᱚᱫᱽ *",
    ind_ph_rep: "ᱡᱮᱞᱮᱠᱟ: Rajesh Sharma, CSR Lead",
    ind_lbl_email: "ᱠᱳᱨᱯᱳᱨᱮᱴ ᱤᱢᱮᱞ *",
    ind_ph_email: "ᱡᱮᱞᱮᱠᱟ: csr@tatasteel.com",
    ind_lbl_phone: "ᱚᱯᱷᱤᱥᱤᱭᱟᱞ ᱯᱷᱳᱱ / ᱣᱟᱴᱥᱮᱯ *",
    ind_ph_phone: "ᱡᱮᱞᱮᱠᱟ: +91 98765 43210",
    ind_lbl_support_types: "ᱜᱚᱲᱚ ᱮᱢ ᱨᱮᱱᱟᱜ ᱦᱟᱹᱴᱤᱧ *",
    ind_lbl_grant_amount: "ᱜᱚᱲᱚ ᱴᱟᱠᱟ (ᱵᱷᱮᱜᱟᱨ ᱜᱮᱭᱟ, ₹ INR)",
    ind_ph_amount: "ᱡᱮᱞᱮᱠᱟ: ₹᱒,᱐᱐,᱐᱐᱐ ᱥᱮ ᱥᱟᱢᱟᱱ",
    ind_lbl_notes: "ᱜᱚᱲᱚ ᱦᱚᱨᱟ ᱟᱨ ᱟᱹᱱ-ᱟᱹᱨᱤ",
    ind_ph_notes: "ᱢᱟᱭᱤᱞᱥᱴᱳᱱ, ᱴᱟᱠᱟ ᱮᱢ ᱟᱹᱱ ᱥᱮ ᱫᱤᱥᱟᱹ-ᱩᱫᱩᱜ ᱚᱠᱛᱚ ᱠᱷᱟᱴᱚ ᱛᱮ ᱚᱞ ᱢᱮ…",
    btn_confirm_pledge: "CSR ᱜᱚᱲᱚ ᱠᱤᱨᱤᱭᱟᱹ ᱯᱩᱥᱴᱟᱹᱣ ᱢᱮ ✓",
    ind_commitments_badge: "ᱠᱳᱨᱯᱳᱨᱮᱴ ᱨᱮᱡᱤᱥᱴᱨᱤ • ᱪᱟᱹᱞᱩ CSR ᱠᱤᱨᱤᱭᱟᱹ",
    ind_commitments_title: "ᱤᱧᱟᱜ ᱪᱟᱹᱞᱩ CSR ᱠᱤᱨᱤᱭᱟᱹ ᱠᱚ",
    ind_commitments_sub: "ᱟᱢᱟᱜ ᱠᱚᱢᱯᱟᱱᱤ ᱨᱮᱱᱟᱜ ᱥᱚᱨᱠᱟᱨᱤ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱜᱚᱲᱚ ᱟᱨ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱜᱟᱛᱮ ᱧᱮᱞ ᱢᱮ᱾",
    btn_close: "ᱵᱚᱱᱫᱽ ᱢᱮ",
    btn_print_csr_cert: "CSR ᱚᱨᱥᱚᱝ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱪᱷᱟᱯᱟ ᱢᱮ"
  }
};

let currentLang = localStorage.getItem('aapv_lang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  try {
    localStorage.setItem('aapv_lang', lang);
  } catch (e) {}

  const dict = translations[lang];

  // Update button label
  const labelEl = document.getElementById('currentLangLabel');
  if (labelEl) labelEl.textContent = dict.label;
  const shortLabelEl = document.getElementById('currentLangShort');
  if (shortLabelEl) shortLabelEl.textContent = lang.toUpperCase();

  // Update active state in menu
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // Update titles & tooltips
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key] !== undefined) {
      el.title = dict[key];
      if (el.getAttribute('aria-label')) {
        el.setAttribute('aria-label', dict[key]);
      }
    }
  });

  if (typeof isShowcasePlaying !== 'undefined' && isShowcasePlaying) {
    const readPageBtnLabel = document.getElementById('readPageBtnLabel');
    if (readPageBtnLabel) {
      readPageBtnLabel.textContent = dict.btn_stop_audio || 'Stop Reading';
    }
  }

  document.documentElement.lang = lang === 'sat' ? 'sat' : (lang === 'hi' ? 'hi' : 'en');
  updateAuthUI();
  updateUnivAuthUI();
  updateIndAuthUI();
  updateAdminAuthUI();
  updateThemeUI();
  if (typeof renderProjects === 'function' && document.getElementById('projectsGrid')) {
    renderProjects();
  }
}

// ==========================================================================
// THEME SWITCHER (Dark Mode / Light Mode)
// ==========================================================================
let currentTheme = localStorage.getItem('aapv_theme') || 'light';

function initTheme() {
  currentTheme = localStorage.getItem('aapv_theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeUI();
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  try {
    localStorage.setItem('aapv_theme', currentTheme);
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeUI();
}

function updateThemeUI() {
  const dict = translations[currentLang] || translations.en;
  const isDark = (document.documentElement.getAttribute('data-theme') || currentTheme) === 'dark';

  document.querySelectorAll('#themeToggleBtn, .theme-toggle-btn').forEach(btn => {
    btn.setAttribute('aria-label', dict.theme_toggle_title || 'Switch to Dark/Light mode');
    btn.setAttribute('title', dict.theme_toggle_title || 'Switch to Dark/Light mode');
    btn.classList.toggle('dark-active', isDark);
  });

  document.querySelectorAll('#themeIcon, .theme-icon').forEach(icon => {
    icon.textContent = isDark ? '☀️' : '🌙';
  });

  document.querySelectorAll('#themeLabel, .theme-label').forEach(label => {
    const textKey = isDark ? 'theme_light' : 'theme_dark';
    label.setAttribute('data-i18n', textKey);
    label.textContent = dict[textKey] || (isDark ? 'Light' : 'Dark');
  });
}

// ==========================================================================
// MOBILE MENU DRAWER CONTROLS
// ==========================================================================
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (!drawer) return;
  const isOpen = drawer.style.display === 'flex';
  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const btn = document.getElementById('mobileMenuBtn');
  if (drawer) {
    drawer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  if (backdrop) backdrop.style.display = 'block';
  if (btn) {
    btn.setAttribute('aria-expanded', 'true');
    const ico = btn.querySelector('.hamburger-icon');
    if (ico) ico.textContent = '✕';
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const btn = document.getElementById('mobileMenuBtn');
  if (drawer) {
    drawer.style.display = 'none';
    document.body.style.overflow = '';
  }
  if (backdrop) backdrop.style.display = 'none';
  if (btn) {
    btn.setAttribute('aria-expanded', 'false');
    const ico = btn.querySelector('.hamburger-icon');
    if (ico) ico.textContent = '☰';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileMenu();
    if (typeof closeLoginModal === 'function') closeLoginModal();
    if (typeof closeUnivLoginModal === 'function') closeUnivLoginModal();
    if (typeof closeIndLoginModal === 'function') closeIndLoginModal();
    if (typeof closeAdminLoginModal === 'function') closeAdminLoginModal();
    if (typeof closeTeamModal === 'function') closeTeamModal();
  }
});

// Super Simple Team Unova Modal Functions
function openTeamModal() {
  const modal = document.getElementById('teamModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeTeamModal() {
  const modal = document.getElementById('teamModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function handleTeamModalBackdropClick(e) {
  if (e.target && e.target.id === 'teamModal') {
    closeTeamModal();
  }
}

// Submitter Type Toggle
function toggleCommunityInput() {
  const isCommunity = document.querySelector('input[name="submitterType"]:checked')?.value === 'community';
  const group = document.getElementById('communityNameGroup');
  if (group) {
    group.style.display = isCommunity ? 'block' : 'none';
    if (isCommunity) {
      document.getElementById('communityName')?.focus();
    }
  }
}

// Toast notification helper
function toast(msgKeyOrText) {
  const dict = translations[currentLang] || translations.en;
  const msg = dict[msgKeyOrText] || msgKeyOrText;
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = 'none'; }, 3000);
}

// Geolocation detection
function detectLocation() {
  const input = document.getElementById('location');
  const dict = translations[currentLang] || translations.en;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      () => {
        if (input) input.value = dict.loc_detected_val;
        toast('toast_loc_detected');
      },
      () => toast('toast_loc_failed')
    );
  } else {
    toast('toast_loc_prompt');
  }
}

// Voice input (powered exclusively by Sarvam AI API)
const voiceBtn = document.getElementById('voiceBtn');
if (voiceBtn) {
  voiceBtn.onclick = handleGrievanceVoiceInput;
}

// Problem submission
function submitProblem() {
  const p = document.getElementById('problem')?.value.trim();
  if (!p) {
    toast('toast_problem_empty');
    return;
  }
  const user = getLoggedInCitizen();
  if (!user) {
    toast('citizen_login_required');
    openLoginView();
    return;
  }
  toast('toast_problem_submitted_linked');
  setTimeout(() => {
    const probEl = document.getElementById('problem');
    if (probEl) probEl.value = '';
    const locEl = document.getElementById('location');
    if (locEl) locEl.value = '';
    const mediaEl = document.getElementById('media');
    if (mediaEl) mediaEl.value = '';
    const commNameEl = document.getElementById('communityName');
    if (commNameEl) commNameEl.value = '';
    const citizenRadio = document.querySelector('input[name="submitterType"][value="citizen"]');
    if (citizenRadio) citizenRadio.checked = true;
    toggleCommunityInput();
  }, 900);
}

// Citizen Authentication State Management
function getLoggedInCitizen() {
  try {
    const data = localStorage.getItem('aapv_citizen_user');
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

function renderAvatarContent(avatarCode) {
  if (!avatarCode || avatarCode === 'CU' || avatarCode === '👤') {
    return `<svg class="user-avatar-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
  }
  return `<span class="user-avatar-initials">${avatarCode}</span>`;
}

function updateAuthUI() {
  const user = getLoggedInCitizen();
  const dict = translations[currentLang] || translations.en;
  
  // 1. Update Topbar Auth Nav
  const navContainer = document.getElementById('authNavContainer');
  if (navContainer) {
    if (user) {
      navContainer.innerHTML = `
        <div class="user-chip" id="userChip">
          <div class="user-avatar">${renderAvatarContent(user.avatar || 'CU')}</div>
          <div class="user-meta">
            <span class="user-name">${user.name}</span>
            <span class="user-badge">${dict.role_citizen || 'Citizen'}</span>
          </div>
          <button class="user-logout-btn" type="button" onclick="handleSessionSwitch()" title="${dict.btn_logout || 'Log out'}">
            <span class="logout-ico">⎋</span>
            <span class="logout-text" data-i18n="btn_logout">${dict.btn_logout || 'Log out'}</span>
          </button>
        </div>
      `;
    } else {
      navContainer.innerHTML = `
        <button class="login-nav-btn" id="loginNavBtn" type="button" onclick="openLoginView()">
          <span class="user-ico">👤</span>
          <span data-i18n="btn_login">${dict.btn_login || 'Log In'}</span>
        </button>
      `;
    }
  }

  // 2. Update Submission Card Views (Login Gate vs Grievance Form)
  const loginGate = document.getElementById('citizenLoginGate');
  const grievanceForm = document.getElementById('citizenGrievanceForm');
  const sessionAvatar = document.getElementById('sessionAvatar');
  const sessionName = document.getElementById('sessionName');
  const sessionSubtitle = document.getElementById('sessionSubtitle');
  const sessionActionBtn = document.getElementById('sessionActionBtn');

  if (loginGate && grievanceForm) {
    if (user) {
      // User is authenticated
      loginGate.style.display = 'none';
      grievanceForm.style.display = 'block';
      if (sessionAvatar) sessionAvatar.innerHTML = renderAvatarContent(user.avatar || 'CU');
      if (sessionName) sessionName.textContent = user.name;
      if (sessionSubtitle) sessionSubtitle.innerHTML = `+91 ${user.phone} • <span>${dict.session_verified_badge || 'Verified Citizen'}</span>`;
      if (sessionActionBtn) {
        sessionActionBtn.innerHTML = `<span class="logout-ico">⎋</span> <span class="logout-text" data-i18n="btn_logout">${dict.btn_logout || 'Log out'}</span>`;
        sessionActionBtn.onclick = handleSessionSwitch;
      }
    } else {
      // Not logged in: Show the Login Gate before the submit grievance page!
      loginGate.style.display = 'block';
      grievanceForm.style.display = 'none';
    }
  }
}

function openLoginView() {
  const loginGate = document.getElementById('citizenLoginGate');
  if (loginGate) {
    try {
      sessionStorage.removeItem('aapv_citizen_guest');
    } catch (e) {}
    updateAuthUI();
    document.getElementById('citizenPortalCard')?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('inlinePhone')?.focus();
  } else {
    openLoginModal();
  }
}

function handleInlineLogin(e) {
  if (e) e.preventDefault();
  const phone = document.getElementById('inlinePhone')?.value.trim() || '98765 43210';
  loginCitizen({
    name: 'Citizen User',
    phone: phone,
    role: 'Citizen',
    avatar: 'CU'
  });
}

function sendInlineOtp() {
  const btn = document.getElementById('inlineOtpStatusBtn');
  if (btn) {
    btn.textContent = 'Sent ✓';
    setTimeout(() => {
      const dict = translations[currentLang] || translations.en;
      btn.textContent = dict.btn_resend_otp || 'Resend OTP';
    }, 3000);
  }
  toast('OTP sent to your phone: 1234');
}

function handleSessionSwitch() {
  try {
    localStorage.removeItem('aapv_citizen_user');
    sessionStorage.removeItem('aapv_citizen_guest');
  } catch (e) {}
  updateAuthUI();
  updateUnivAuthUI();
  updateIndAuthUI();
  updateAdminAuthUI();
  const dict = translations[currentLang] || translations.en;
  toast(dict.logout_success_toast || 'Logged out successfully.');
}

function openLoginModal() {
  const modal = document.getElementById('loginModal');
  if (!modal) return;
  modal.style.display = 'flex';
  resetPhoneStep();
  const phoneInput = document.getElementById('citizenPhone');
  if (phoneInput) {
    phoneInput.focus();
  }
}

function closeLoginModal() {
  const modal = document.getElementById('loginModal');
  if (modal) modal.style.display = 'none';
}

function handleModalBackdropClick(e) {
  if (e.target && e.target.id === 'loginModal') {
    closeLoginModal();
  }
}

function sendOtp() {
  const phoneInput = document.getElementById('citizenPhone');
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const targetPhone = phone || '98765 43210';
  const targetPhoneEl = document.getElementById('otpTargetPhone');
  if (targetPhoneEl) {
    targetPhoneEl.textContent = '+91 ' + targetPhone;
  }

  const phoneStep = document.getElementById('loginPhoneStep');
  const otpStep = document.getElementById('loginOtpStep');
  if (phoneStep && otpStep) {
    phoneStep.style.display = 'none';
    otpStep.style.display = 'block';
    const otpInput = document.getElementById('citizenOtp');
    if (otpInput) otpInput.focus();
  }
}

function resetPhoneStep() {
  const phoneStep = document.getElementById('loginPhoneStep');
  const otpStep = document.getElementById('loginOtpStep');
  if (phoneStep && otpStep) {
    phoneStep.style.display = 'block';
    otpStep.style.display = 'none';
  }
}

function handleLoginSubmit(e) {
  if (e) e.preventDefault();
  const phone = document.getElementById('citizenPhone')?.value.trim() || '98765 43210';
  loginCitizen({
    name: 'Citizen User',
    phone: phone,
    role: 'Citizen',
    avatar: 'CU'
  });
}

function loginDemoCitizen(name, phone, role) {
  const parts = name.split(' ');
  const avatar = parts.map(p => p[0]).join('').toUpperCase();
  loginCitizen({
    name,
    phone,
    role,
    avatar
  });
}

function loginCitizen(userData) {
  try {
    localStorage.setItem('aapv_citizen_user', JSON.stringify(userData));
    sessionStorage.removeItem('aapv_citizen_guest');
  } catch (e) {}
  closeLoginModal();
  updateAuthUI();
  updateUnivAuthUI();
  updateIndAuthUI();
  updateAdminAuthUI();
  const dict = translations[currentLang] || translations.en;
  toast(dict.login_success_toast || 'Logged in successfully! Welcome back.');
}

function logoutCitizen() {
  handleSessionSwitch();
}

// ============================================================================
// University & Academic Auth Management
// ============================================================================
function getLoggedInUniv() {
  try {
    const data = localStorage.getItem('aapv_univ_user');
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

function updateUnivAuthUI() {
  const user = getLoggedInUniv();
  const dict = translations[currentLang] || translations.en;
  const navContainer = document.getElementById('univAuthNavContainer');
  if (!navContainer) return;

  if (user) {
    navContainer.innerHTML = `
      <div class="user-chip user-chip-univ" id="univUserChip">
        <div class="user-avatar">${renderAvatarContent(user.avatar || 'UN')}</div>
        <div class="user-meta">
          <span class="user-name">${user.name}</span>
          <span class="user-badge">${user.institution || 'University Lead'}</span>
        </div>
        <button class="user-logout-btn" type="button" onclick="logoutUniversity()" title="${dict.btn_logout || 'Log out'}">
          <span class="logout-ico">⎋</span>
          <span class="logout-text" data-i18n="btn_logout">${dict.btn_logout || 'Log out'}</span>
        </button>
      </div>
    `;
  } else {
    const citUser = getLoggedInCitizen();
    if (citUser) {
      navContainer.innerHTML = `
        <div class="user-chip" id="univCitizenUserChip">
          <div class="user-avatar">${renderAvatarContent(citUser.avatar || 'CU')}</div>
          <div class="user-meta">
            <span class="user-name">${citUser.name}</span>
            <span class="user-badge">${dict.role_citizen || 'Citizen'}</span>
          </div>
          <button class="user-logout-btn" type="button" onclick="handleSessionSwitch()" title="${dict.btn_logout || 'Log out'}">
            <span class="logout-ico">⎋</span>
            <span class="logout-text" data-i18n="btn_logout">${dict.btn_logout || 'Log out'}</span>
          </button>
        </div>
      `;
    } else {
      navContainer.innerHTML = `
        <button class="login-nav-btn univ-login-nav-btn" id="univLoginNavBtn" type="button" onclick="openUnivLoginModal()">
          <span class="user-ico">🏛️</span>
          <span data-i18n="univ_login_btn">${dict.univ_login_btn || 'Faculty & Lab Login'}</span>
        </button>
      `;
    }
  }
}

function openUnivLoginModal() {
  const modal = document.getElementById('univLoginModal');
  if (modal) modal.style.display = 'flex';
}

function closeUnivLoginModal() {
  const modal = document.getElementById('univLoginModal');
  if (modal) modal.style.display = 'none';
}

function handleUnivModalBackdropClick(e) {
  if (e.target && e.target.id === 'univLoginModal') {
    closeUnivLoginModal();
  }
}

function handleUnivLoginSubmit(e) {
  if (e) e.preventDefault();
  const email = document.getElementById('univEmail')?.value.trim() || 'faculty@bitmesra.ac.in';
  const inst = document.getElementById('univSelect')?.value || 'BIT Mesra, Ranchi';
  const namePart = email.split('@')[0].replace('.', ' ');
  const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
  loginUniversity({
    name: formattedName,
    email: email,
    institution: inst,
    role: 'Faculty Researcher',
    avatar: 'UN'
  });
}

function loginDemoUniv(name, institution, role, avatar) {
  loginUniversity({
    name,
    institution,
    role,
    avatar: avatar || 'UN'
  });
}

function loginUniversity(userData) {
  try {
    localStorage.setItem('aapv_univ_user', JSON.stringify(userData));
  } catch (e) {}
  closeUnivLoginModal();
  updateUnivAuthUI();
  toast('Welcome, ' + userData.name + ' (' + userData.institution + ')');
}

function logoutUniversity() {
  try {
    localStorage.removeItem('aapv_univ_user');
  } catch (e) {}
  updateUnivAuthUI();
  toast('Signed out from University Workspace.');
}

// ============================================================================
// Industry & CSR Partner Auth Management
// ============================================================================
function getLoggedInInd() {
  try {
    const data = localStorage.getItem('aapv_ind_user');
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

function updateIndAuthUI() {
  const user = getLoggedInInd();
  const dict = translations[currentLang] || translations.en;
  const navContainer = document.getElementById('indAuthNavContainer');
  if (!navContainer) return;

  if (user) {
    navContainer.innerHTML = `
      <div class="user-chip user-chip-ind" id="indUserChip">
        <div class="user-avatar">${renderAvatarContent(user.avatar || 'CSR')}</div>
        <div class="user-meta">
          <span class="user-name">${user.name}</span>
          <span class="user-badge">${user.company || 'CSR Partner'}</span>
        </div>
        <button class="user-logout-btn" type="button" onclick="logoutIndustry()" title="${dict.btn_logout || 'Log out'}">
          <span class="logout-ico">⎋</span>
          <span class="logout-text" data-i18n="btn_logout">${dict.btn_logout || 'Log out'}</span>
        </button>
      </div>
    `;
  } else {
    const citUser = getLoggedInCitizen();
    if (citUser) {
      navContainer.innerHTML = `
        <div class="user-chip" id="indCitizenUserChip">
          <div class="user-avatar">${renderAvatarContent(citUser.avatar || 'CU')}</div>
          <div class="user-meta">
            <span class="user-name">${citUser.name}</span>
            <span class="user-badge">${dict.role_citizen || 'Citizen'}</span>
          </div>
          <button class="user-logout-btn" type="button" onclick="handleSessionSwitch()" title="${dict.btn_logout || 'Log out'}">
            <span class="logout-ico">⎋</span>
            <span class="logout-text" data-i18n="btn_logout">${dict.btn_logout || 'Log out'}</span>
          </button>
        </div>
      `;
    } else {
      navContainer.innerHTML = `
        <button class="login-nav-btn ind-login-nav-btn" id="indLoginNavBtn" type="button" onclick="openIndLoginModal()">
          <span class="user-ico">🏢</span>
          <span data-i18n="ind_login_btn">${dict.ind_login_btn || 'Industry & CSR Login'}</span>
        </button>
      `;
    }
  }
}

function openIndLoginModal() {
  const modal = document.getElementById('indLoginModal');
  if (modal) modal.style.display = 'flex';
}

function closeIndLoginModal() {
  const modal = document.getElementById('indLoginModal');
  if (modal) modal.style.display = 'none';
}

function handleIndModalBackdropClick(e) {
  if (e.target && e.target.id === 'indLoginModal') {
    closeIndLoginModal();
  }
}

function handleIndLoginSubmit(e) {
  if (e) e.preventDefault();
  const email = document.getElementById('indEmail')?.value.trim() || 'csr.lead@tatasteel.com';
  const company = document.getElementById('indCompanySelect')?.value || 'Tata Steel Foundation';
  const namePart = email.split('@')[0].replace('.', ' ');
  const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
  loginIndustry({
    name: formattedName,
    email: email,
    company: company,
    role: 'CSR Director',
    avatar: 'CSR'
  });
}

function loginDemoInd(name, company, role, avatar) {
  loginIndustry({
    name,
    company,
    role,
    avatar: avatar || 'CSR'
  });
}

function loginIndustry(userData) {
  try {
    localStorage.setItem('aapv_ind_user', JSON.stringify(userData));
  } catch (e) {}
  closeIndLoginModal();
  updateIndAuthUI();
  toast('Welcome, ' + userData.name + ' (' + userData.company + ')');
}

function logoutIndustry() {
  try {
    localStorage.removeItem('aapv_ind_user');
  } catch (e) {}
  updateIndAuthUI();
  toast('Signed out from Industry & CSR Portal.');
}

// ============================================================================
// State Administration Auth Management
// ============================================================================
function getLoggedInAdmin() {
  try {
    const data = localStorage.getItem('aapv_admin_user');
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

function updateAdminAuthUI() {
  const user = getLoggedInAdmin();
  const dict = translations[currentLang] || translations.en;
  const navContainer = document.getElementById('adminAuthNavContainer');
  if (!navContainer) return;

  if (user) {
    navContainer.innerHTML = `
      <div class="user-chip user-chip-admin" id="adminUserChip">
        <div class="user-avatar">${renderAvatarContent(user.avatar || 'GOJ')}</div>
        <div class="user-meta">
          <span class="user-name">${user.name}</span>
          <span class="user-badge">${user.dept || 'State Admin'}</span>
        </div>
        <button class="user-logout-btn" type="button" onclick="logoutAdmin()" title="${dict.btn_logout || 'Log out'}">
          <span class="logout-ico">⎋</span>
          <span class="logout-text" data-i18n="btn_logout">${dict.btn_logout || 'Log out'}</span>
        </button>
      </div>
    `;
  } else {
    const citUser = getLoggedInCitizen();
    if (citUser) {
      navContainer.innerHTML = `
        <div class="user-chip" id="adminCitizenUserChip">
          <div class="user-avatar">${renderAvatarContent(citUser.avatar || 'CU')}</div>
          <div class="user-meta">
            <span class="user-name">${citUser.name}</span>
            <span class="user-badge">${dict.role_citizen || 'Citizen'}</span>
          </div>
          <button class="user-logout-btn" type="button" onclick="handleSessionSwitch()" title="${dict.btn_logout || 'Log out'}">
            <span class="logout-ico">⎋</span>
            <span class="logout-text" data-i18n="btn_logout">${dict.btn_logout || 'Log out'}</span>
          </button>
        </div>
      `;
    } else {
      navContainer.innerHTML = `
        <button class="login-nav-btn admin-login-nav-btn" id="adminLoginNavBtn" type="button" onclick="openAdminLoginModal()">
          <span class="user-ico">🛡️</span>
          <span data-i18n="admin_login_btn">${dict.admin_login_btn || 'Admin Officer Login'}</span>
        </button>
      `;
    }
  }
}

function openAdminLoginModal() {
  const modal = document.getElementById('adminLoginModal');
  if (modal) modal.style.display = 'flex';
}

function closeAdminLoginModal() {
  const modal = document.getElementById('adminLoginModal');
  if (modal) modal.style.display = 'none';
}

function handleAdminModalBackdropClick(e) {
  if (e.target && e.target.id === 'adminLoginModal') {
    closeAdminLoginModal();
  }
}

function handleAdminLoginSubmit(e) {
  if (e) e.preventDefault();
  const email = document.getElementById('adminEmail')?.value.trim() || 'officer.it@jharkhand.gov.in';
  const dept = document.getElementById('adminDeptSelect')?.value || 'Dept of Higher & Technical Education';
  const namePart = email.split('@')[0].replace('.', ' ');
  const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
  loginAdmin({
    name: formattedName,
    email: email,
    dept: dept,
    role: 'Government Administrator',
    avatar: 'GOJ'
  });
}

function loginDemoAdmin(name, dept, role, avatar) {
  loginAdmin({
    name,
    dept,
    role,
    avatar: avatar || 'GOJ'
  });
}

function loginAdmin(userData) {
  try {
    localStorage.setItem('aapv_admin_user', JSON.stringify(userData));
  } catch (e) {}
  closeAdminLoginModal();
  updateAdminAuthUI();
  toast('Welcome, ' + userData.name + ' (' + userData.dept + ')');
}

function logoutAdmin() {
  try {
    localStorage.removeItem('aapv_admin_user');
  } catch (e) {}
  updateAdminAuthUI();
  toast('Signed out from State Admin Command Centre.');
}


// University & Industry actions
function acceptChallenge(btn) {
  btn.textContent = 'Challenge accepted ✓';
  btn.disabled = true;
  toast('Challenge added to your university workspace.');
}

function supportProject(btn) {
  btn.textContent = 'Interest registered ✓';
  btn.disabled = true;
  toast('Great — your interest has been sent to the project team.');
}

// Language Dropdown Setup
function initLanguageDropdown() {
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');

  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langMenu.classList.toggle('show');
      langBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
        langMenu.classList.remove('show');
        langBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', () => {
      if (langMenu.classList.contains('show')) {
        langMenu.classList.remove('show');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (langMenu && langMenu.classList.contains('show')) {
          langMenu.classList.remove('show');
          langBtn.setAttribute('aria-expanded', 'false');
        }
        closeLoginModal();
        closeUnivLoginModal();
        closeIndLoginModal();
        closeAdminLoginModal();
      }
    });
  }

  // Set initial language
  setLanguage(currentLang);

  // Check and show first-time language selection prompt if not completed yet
  initFirstTimeLangPrompt();
}

// First-time Language Prompt Modal (one-time prompt)
function initFirstTimeLangPrompt() {
  const modal = document.getElementById('langPromptModal');
  if (!modal) return;

  let hasSelected = false;
  try {
    hasSelected = localStorage.getItem('aapv_lang_selected');
  } catch (e) {}

  if (!hasSelected) {
    modal.style.display = 'flex';
  } else {
    modal.style.display = 'none';
  }

  modal.querySelectorAll('.lang-choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosenLang = btn.getAttribute('data-choose-lang');
      if (chosenLang) {
        setLanguage(chosenLang);
        try {
          localStorage.setItem('aapv_lang_selected', 'true');
        } catch (e) {}
      }
      modal.style.display = 'none';
    });
  });
}

// ==========================================================================
// VOICE-ENABLED NARRATION & ACCESSIBILITY ENGINE (Web Speech API + Fallback)
// ==========================================================================
let showcaseAudioTimer = null;
let isShowcasePlaying = false;
let showcaseActiveBtn = null;
let showcaseActiveEl = null;
let isTapToHearActive = false;
let pageNarrationIndex = 0;
let pageNarrationTargets = [];

function extractReadableText(el) {
  if (!el) return '';
  const clone = el.cloneNode(true);
  clone.querySelectorAll('button, .narrate-btn, .speaker-icon, svg, script, style, .login-modal-overlay, [aria-hidden="true"]').forEach(n => n.remove());
  return (clone.innerText || clone.textContent || '').replace(/\s+/g, ' ').trim();
}

function getBestVoiceForLang(langCode) {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || !voices.length) return null;

  if (langCode === 'hi') {
    return voices.find(v => v.lang === 'hi-IN' || v.lang.startsWith('hi')) ||
           voices.find(v => v.lang.includes('IN')) || null;
  }
  if (langCode === 'sat') {
    return voices.find(v => v.lang.startsWith('sat')) ||
           voices.find(v => v.lang === 'hi-IN' || v.lang.startsWith('hi')) ||
           voices.find(v => v.lang.includes('IN')) || null;
  }
  return voices.find(v => v.lang === 'en-IN' || v.lang === 'en-GB' || v.lang.startsWith('en')) || null;
}

function narrateElement(arg1, arg2) {
  let btn = null;
  let target = null;

  if (arg1 && arg1.nodeType === 1) {
    btn = arg1;
    if (typeof arg2 === 'string') {
      if (arg2 === 'parent') {
        target = btn.closest('[data-narrate-item]') || btn.closest('.contact-card, .card, .problemcard, section, article') || btn.parentElement;
      } else if (arg2.startsWith('#') || arg2.startsWith('.')) {
        target = document.querySelector(arg2);
      } else {
        target = document.getElementById(arg2) || document.querySelector(arg2);
      }
    }
  } else if (typeof arg1 === 'string') {
    target = document.getElementById(arg1) || document.querySelector(arg1);
    if (arg2 && arg2.nodeType === 1) {
      btn = arg2;
    }
  }

  if (!target && btn) {
    target = btn.closest('[data-narrate-item]') || btn.closest('.contact-card, .card, .problemcard, section, article') || btn.parentElement;
  }

  if (isShowcasePlaying && (showcaseActiveEl === target || showcaseActiveBtn === btn)) {
    stopSpeaking(false);
    return;
  }

  stopSpeaking(true);

  if (!target) return;

  const textToRead = extractReadableText(target);
  if (!textToRead) return;

  narrateText(textToRead, target, () => {
    stopSpeaking(true);
  }, btn);
}

function narrateText(text, targetEl, callback, triggerBtn = null) {
  if (isShowcasePlaying && showcaseActiveEl === targetEl) {
    stopSpeaking(false);
    if (callback) callback();
    return;
  }

  stopSpeaking(true);

  isShowcasePlaying = true;
  showcaseActiveEl = targetEl;
  showcaseActiveBtn = triggerBtn;

  if (targetEl) {
    targetEl.classList.add('speaking-highlight');
    if (typeof targetEl.scrollIntoView === 'function') {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  if (triggerBtn) {
    triggerBtn.classList.add('speaking');
    const labelSpan = triggerBtn.querySelector('.narrate-label');
    if (labelSpan) {
      if (!labelSpan.hasAttribute('data-original-text')) {
        labelSpan.setAttribute('data-original-text', labelSpan.textContent);
      }
      labelSpan.textContent = translations[currentLang]?.narrate_btn_speaking || 'Stop ⏹';
    }
  }

  const stopAudioBtn = document.getElementById('stopAudioBtn');
  if (stopAudioBtn) stopAudioBtn.style.display = 'inline-flex';

  const dict = translations[currentLang] || translations.en;
  toast(dict.voice_status_ready || 'Playing Voice Narration…');

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voiceLang = currentLang === 'hi' ? 'hi-IN' : (currentLang === 'sat' ? 'hi-IN' : 'en-IN');
    utterance.lang = voiceLang;
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    const matchedVoice = getBestVoiceForLang(currentLang);
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onend = () => {
      stopSpeaking(true);
      if (callback) callback();
    };

    utterance.onerror = (err) => {
      console.warn('SpeechSynthesis error:', err);
      stopSpeaking(true);
      if (callback) callback();
    };

    window.speechSynthesis.speak(utterance);
  } else {
    const words = text.split(/\s+/).length;
    const duration = Math.min(Math.max(words * 280, 2500), 12000);
    showcaseAudioTimer = setTimeout(() => {
      stopSpeaking(true);
      if (callback) callback();
    }, duration);
  }
}

function toggleReadEntirePage() {
  if (isShowcasePlaying) {
    stopSpeaking();
    return;
  }

  stopSpeaking(true);

  const targets = Array.from(document.querySelectorAll(
    '#heroCopyBlock, .hero-copy, #citizenPortalCard, .dashboard, #howSection, .how-grid, #impactHeroBlock, #contactSection, .contact-section, .why-help-section'
  )).filter(el => el.offsetParent !== null && extractReadableText(el).length > 10);

  if (!targets.length) {
    toast(translations[currentLang]?.narrate_btn_label || 'No content found to read.');
    return;
  }

  pageNarrationTargets = targets;
  pageNarrationIndex = 0;
  isShowcasePlaying = true;

  const readPageBtn = document.getElementById('readPageBtn');
  const readPageBtnIcon = document.getElementById('readPageBtnIcon') || readPageBtn?.querySelector('.audio-play-icon');
  const readPageBtnLabel = document.getElementById('readPageBtnLabel');
  const stopAudioBtn = document.getElementById('stopAudioBtn');

  if (readPageBtn) readPageBtn.classList.add('speaking');
  if (readPageBtnIcon) readPageBtnIcon.textContent = '⏹';
  if (readPageBtnLabel) {
    const dict = translations[currentLang] || translations.en;
    readPageBtnLabel.textContent = dict.narrate_btn_speaking || 'Stop ⏹';
  }
  if (stopAudioBtn) stopAudioBtn.style.display = 'inline-flex';

  toast((translations[currentLang]?.portal_sub_impact || 'Reading page aloud') + '…');

  function readNextSection() {
    if (!isShowcasePlaying || pageNarrationIndex >= pageNarrationTargets.length) {
      stopSpeaking(true);
      return;
    }
    document.querySelectorAll('.speaking-highlight').forEach(el => el.classList.remove('speaking-highlight'));
    const cur = pageNarrationTargets[pageNarrationIndex];
    cur.classList.add('speaking-highlight');
    cur.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const text = extractReadableText(cur);
    pageNarrationIndex++;

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = currentLang === 'hi' ? 'hi-IN' : (currentLang === 'sat' ? 'hi-IN' : 'en-IN');
      utt.rate = 0.95;
      const voice = getBestVoiceForLang(currentLang);
      if (voice) utt.voice = voice;
      utt.onend = () => {
        if (isShowcasePlaying) {
          setTimeout(readNextSection, 300);
        }
      };
      utt.onerror = () => {
        if (isShowcasePlaying) {
          setTimeout(readNextSection, 300);
        }
      };
      window.speechSynthesis.speak(utt);
    } else {
      showcaseAudioTimer = setTimeout(readNextSection, 3500);
    }
  }

  readNextSection();
}

function stopSpeaking(silent = false) {
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
  if (showcaseAudioTimer) {
    clearTimeout(showcaseAudioTimer);
    showcaseAudioTimer = null;
  }
  isShowcasePlaying = false;
  pageNarrationTargets = [];
  pageNarrationIndex = 0;

  document.querySelectorAll('.speaking-highlight').forEach(el => el.classList.remove('speaking-highlight'));
  document.querySelectorAll('.narrate-btn.speaking, .audio-guide-btn.speaking').forEach(btn => {
    btn.classList.remove('speaking');
    const labelSpan = btn.querySelector('.narrate-label');
    if (labelSpan) {
      const orig = labelSpan.getAttribute('data-original-text');
      labelSpan.textContent = orig || (translations[currentLang]?.narrate_btn_label || 'Listen');
    }
  });

  const stopAudioBtn = document.getElementById('stopAudioBtn');
  if (stopAudioBtn) stopAudioBtn.style.display = 'none';

  const readPageBtn = document.getElementById('readPageBtn');
  const readPageBtnIcon = document.getElementById('readPageBtnIcon') || readPageBtn?.querySelector('.audio-play-icon');
  const readPageBtnLabel = document.getElementById('readPageBtnLabel');
  if (readPageBtn) readPageBtn.classList.remove('speaking');
  if (readPageBtnIcon) readPageBtnIcon.textContent = '▶';

  if (readPageBtnLabel) {
    const dict = translations[currentLang] || translations.en;
    readPageBtnLabel.textContent = dict.btn_read_page || 'Read Page Aloud';
  }

  showcaseActiveBtn = null;
  showcaseActiveEl = null;

  if (!silent) {
    toast(translations[currentLang]?.toast_audio_stopped || 'Audio narration stopped.');
  }
}

// Backwards-compatible aliases
function toggleReadPage() { toggleReadEntirePage(); }
function stopNarration() { stopSpeaking(false); }

// ==========================================================================
// ADMIN DASHBOARD & COMMAND CENTRE INTERACTIVE HANDLERS
// ==========================================================================
function openDownloadReportModal() {
  const modal = document.getElementById('adminDownloadModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
  }
}

function closeDownloadReportModal() {
  const modal = document.getElementById('adminDownloadModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}

function handleAdminDownloadBackdrop(event) {
  if (event.target && event.target.id === 'adminDownloadModal') {
    closeDownloadReportModal();
  }
}

function downloadAdminCsvReport() {
  const rows = [
    ["Ticket_ID", "Submission_Date", "Submitter_Type", "District", "Category", "Problem_Summary", "AI_Severity_Score", "Assigned_Lab_or_Dept", "Current_Status", "Resolution_SLA_Days"]
  ];

  const sampleData = [
    ["AAPV-2026-0842", "2026-09-15", "Community", "Dumka", "Water", "High iron & bacterial contamination in Shikaripara handpumps", "0.92 (High)", "BIT Mesra • Rural Tech Lab", "Ongoing Prototype", "14"],
    ["AAPV-2026-0791", "2026-09-14", "Citizen", "Hazaribagh", "Agriculture", "Crop loss due to unseasonal rainfall and canal blockage", "0.78 (Medium)", "Dept of Agriculture & Co-op", "Field Validated", "10"],
    ["AAPV-2026-0715", "2026-09-13", "PRI", "Giridih", "Energy", "Frequent solar micro-grid failures in forest hamlets", "0.85 (High)", "NIT Jamshedpur • Clean Energy Dept", "Lab Prototype", "21"],
    ["AAPV-2026-0690", "2026-09-12", "Community", "Dhanbad", "Health", "Fluorosis and joint pain in coal belt children", "0.95 (Critical)", "AIIMS Deoghar • Community Health", "Priority Action", "7"],
    ["AAPV-2026-0654", "2026-09-11", "Citizen", "Ranchi", "Environment", "Plastic waste clogging drainage near weekly haat", "0.64 (Medium)", "Ranchi Municipal Corp / NGO", "Under Review", "15"],
    ["AAPV-2026-0612", "2026-09-10", "Citizen", "East Singhbhum", "Education", "Primary school roof leakage and broken sanitation", "0.88 (High)", "Dept of School Education & Literacy", "Dispatched", "12"],
    ["AAPV-2026-0589", "2026-09-09", "PRI", "Simdega", "Water", "Defunct solar dual-pump drinking water system", "0.74 (Medium)", "District DWSD Simdega", "Resolved", "5"],
    ["AAPV-2026-0542", "2026-09-08", "Citizen", "Khunti", "Agriculture", "Lac insect infestation ruining host trees", "0.82 (High)", "ICAR-IINRG Namkum", "Research Sandbox", "30"]
  ];

  sampleData.forEach(r => rows.push(r));

  const districts = ["Ranchi", "Dhanbad", "Giridih", "Dumka", "Hazaribagh", "Bokaro", "Deoghar", "East Singhbhum", "Palamu", "Ramgarh", "Seraikela", "Chatra", "Godda", "Gumla", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Sahebganj", "Simdega", "West Singhbhum", "Garhwa"];
  const categories = ["Water", "Healthcare", "Education", "Agriculture", "Environment", "Rural Roads", "Electricity"];
  
  for (let i = 1; i <= 40; i++) {
    const id = "AAPV-2026-" + String(1000 - i).padStart(4, '0');
    const d = districts[i % districts.length];
    const cat = categories[i % categories.length];
    const sev = (0.60 + (i % 38) * 0.01).toFixed(2);
    rows.push([id, "2026-08-" + String(10 + (i % 20)).padStart(2, '0'), i % 2 === 0 ? "Citizen" : "Community", d, cat, `Field verification for ${cat.toLowerCase()} grievance at ${d} block`, sev, "State Innovation Taskforce", "Validated", String(7 + (i % 14))]);
  }

  const csvContent = rows.map(e => e.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "Jharkhand_AapV_Grievance_Intelligence_2026.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  closeDownloadReportModal();
  toast(currentLang === 'hi' ? 'सत्यापित CSV डेटासेट सफलतापूर्वक डाउनलोड किया गया!' : (currentLang === 'sat' ? 'CSV ᱰᱟᱴᱟᱥᱮᱴ ᱰᱟᱣᱩᱱᱞᱳᱰ ᱮᱱᱟ!' : 'Verified CSV Dataset successfully downloaded (2,481 records)!'));
}

function printAdminExecutiveReport() {
  closeDownloadReportModal();
  window.print();
}

function filterAdminTimeRange(val) {
  const dict = translations[currentLang] || translations.en;
  toast((dict.admin_triage_queue || 'Triage queue') + ` • Filtered to ${val} days`);
  
  const barTracks = {
    Health: val === '30' ? '92%' : (val === '365' ? '78%' : '86%'),
    Edu: val === '30' ? '65%' : (val === '365' ? '74%' : '70%'),
    Agri: val === '30' ? '58%' : (val === '365' ? '48%' : '51%'),
    Env: val === '30' ? '45%' : (val === '365' ? '35%' : '40%'),
    Water: val === '30' ? '32%' : (val === '365' ? '28%' : '23%')
  };

  const elH = document.getElementById('barTrackHealth'); if (elH) elH.style.width = barTracks.Health;
  const elE = document.getElementById('barTrackEdu'); if (elE) elE.style.width = barTracks.Edu;
  const elA = document.getElementById('barTrackAgri'); if (elA) elA.style.width = barTracks.Agri;
  const elEnv = document.getElementById('barTrackEnv'); if (elEnv) elEnv.style.width = barTracks.Env;
  const elW = document.getElementById('barTrackWater'); if (elW) elW.style.width = barTracks.Water;
}

let currentTriageTicket = 'q1';
const TRIAGE_TICKETS = {
  q1: {
    id: "AAPV-2026-0842",
    title: "Handpump Contamination & Fluorosis",
    district: "Giridih • Jamua Block",
    category: "Water & Sanitation",
    urgency: "High (0.92)",
    transcript: "हमार गांव का चापाकल से पियर-पियर बदबूदार पानी निकल रहल बा। तीन गो लइका लोग के पेट खराब भइल बा। (Yellow smelly water from village handpump; 3 children fell ill).",
    suggestedDept: "District Jal Swachhata Dept (DWSD)",
    defaultNotes: "Dispatch DWSD water testing kit to Jamua within 48h. Direct BIT Mesra team to evaluate field filter pilot."
  },
  q2: {
    id: "AAPV-2026-0789",
    title: "Broken School Toilets & Running Water",
    district: "Dumka • Shikaripara Block",
    category: "Education & Infrastructure",
    urgency: "Medium (0.76)",
    transcript: "ᱟᱥᱲᱟ ᱨᱮ ᱴᱚᱭᱞᱮᱴ ᱨᱟᱹᱯᱩᱫ ᱟᱠᱟᱱᱟ, ᱫᱟᱜ ᱦᱚᱸ ᱵᱟᱹᱱᱩᱜᱼᱟ᱾ ᱠᱩᱲᱤ ᱜᱤᱫᱽᱨᱟᱹ ᱠᱚ ᱟᱹᱰᱤ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱨᱮ ᱢᱮᱱᱟᱜ ᱠᱚᱣᱟ᱾ (School toilet damaged, no water. Girl students facing severe difficulties).",
    suggestedDept: "Dept of School Education & Literacy",
    defaultNotes: "Allocate priority composite school grant for immediate plumbing repairs and rooftop rain harvesting."
  },
  q3: {
    id: "AAPV-2026-0710",
    title: "Crop Irrigation Scheduling Failure",
    district: "Hazaribagh • Barhi Block",
    category: "Agriculture & Co-op",
    urgency: "Low (0.58)",
    transcript: "नहर से पानी समय पर नहीं मिल रहा है, धान की रोपाई पिछड़ रही है। पंप मरम्मत के लिए सहयोग चाहिए। (Canal water not reaching on time, paddy transplanting delayed).",
    suggestedDept: "Dept of Agriculture & Co-op",
    defaultNotes: "Synchronize canal release with Barhi Krishi Vigyan Kendra advisories and inspect diesel pumps."
  }
};

function openTriageReviewModal(ticketKey) {
  currentTriageTicket = ticketKey;
  const ticket = TRIAGE_TICKETS[ticketKey] || TRIAGE_TICKETS.q1;
  const modal = document.getElementById('adminTriageModal');
  const detailsBox = document.getElementById('triageDetailsBox');
  const badge = document.getElementById('triageQueueBadge');
  const notes = document.getElementById('triageOfficerNotes');

  if (badge) badge.textContent = `AI Triage • Ticket #${ticket.id}`;
  if (notes) notes.value = ticket.defaultNotes;

  if (detailsBox) {
    detailsBox.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
        <div>
          <strong style="font-size:16px; color:var(--ink);">${ticket.title}</strong>
          <div style="color:var(--muted); font-size:12px; margin-top:2px;">📍 ${ticket.district} • 🏷️ ${ticket.category}</div>
        </div>
        <span class="tag water" style="font-size:11px; padding:3px 10px;">${ticket.urgency}</span>
      </div>
      <div style="background:var(--card); border:1px solid var(--line); border-radius:8px; padding:12px; margin-top:8px;">
        <small style="display:block; font-size:11px; text-transform:uppercase; font-weight:700; color:var(--accent); margin-bottom:4px;">🎙️ AI Voice Transcript (Sarvam AI STT):</small>
        <p style="font-size:13px; color:var(--ink); margin:0; line-height:1.5; font-style:italic;">"${ticket.transcript}"</p>
      </div>
    `;
  }

  if (modal) {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
  }
}

function closeTriageReviewModal() {
  const modal = document.getElementById('adminTriageModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}

function handleAdminTriageBackdrop(event) {
  if (event.target && event.target.id === 'adminTriageModal') {
    closeTriageReviewModal();
  }
}

function submitTriageAction(event) {
  if (event) event.preventDefault();
  const dept = document.getElementById('triageDeptSelect')?.value || 'Departmental Officer';
  const priority = document.getElementById('triagePrioritySelect')?.value || 'High';
  
  const cardEl = document.getElementById(`triageCard-${currentTriageTicket}`);
  if (cardEl) {
    cardEl.style.transition = 'all 0.3s ease';
    cardEl.style.opacity = '0.4';
    cardEl.style.pointerEvents = 'none';
    const btn = cardEl.querySelector('button');
    if (btn) {
      btn.textContent = 'Dispatched ✓';
      btn.disabled = true;
      btn.style.background = '#16a34a';
      btn.style.color = '#fff';
    }
  }

  closeTriageReviewModal();
  toast(currentLang === 'hi' ? `टिकट #${currentTriageTicket.toUpperCase()} सफलतापूर्वक ${dept} को प्रेषित किया गया!` : (currentLang === 'sat' ? `ᱴᱤᱠᱮᱴ ᱠᱩᱞ ᱮᱱᱟ!` : `Ticket #${currentTriageTicket.toUpperCase()} dispatched to ${dept} (${priority}) ✓`));
}

// ==========================================================================
// UNIVERSITY PORTAL & CHALLENGE REVIEW HANDLERS
// ==========================================================================
function openCreateProjectModal() {
  const modal = document.getElementById('univCreateProjectModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
  }
}

function closeCreateProjectModal() {
  const modal = document.getElementById('univCreateProjectModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}

function handleUnivCreateProjectBackdrop(event) {
  if (event.target && event.target.id === 'univCreateProjectModal') {
    closeCreateProjectModal();
  }
}

function handleCreateProjectSubmit(event) {
  if (event) event.preventDefault();
  const title = document.getElementById('univNewProjectTitle')?.value || 'New Research Project';
  const college = document.getElementById('univNewProjectCollege')?.value || 'University Lab';
  const lead = document.getElementById('univNewProjectLead')?.value || 'Faculty Mentor';
  const challenge = document.getElementById('univNewProjectChallenge')?.value || 'Grassroots Challenge';

  const newProject = {
    id: "JH-UNIV-" + Date.now().toString().slice(-4),
    title,
    college,
    lead,
    challenge,
    date: new Date().toLocaleDateString()
  };

  try {
    const existing = JSON.parse(localStorage.getItem('aapv_univ_projects') || '[]');
    existing.unshift(newProject);
    localStorage.setItem('aapv_univ_projects', JSON.stringify(existing));
  } catch (e) {}

  closeCreateProjectModal();
  toast(currentLang === 'hi' ? `परियोजना "${title}" पंजीकृत! सीएसआर सह-वित्तपोषण के लिए प्रस्तुत।` : (currentLang === 'sat' ? `ᱯᱨᱳᱡᱮᱠᱴ ᱨᱮᱡᱤᱥᱴᱟᱨ ᱮᱱᱟ!` : `Project "${title}" registered! Submitted for CSR matching.`));
  
  const form = document.getElementById('univCreateProjectForm');
  if (form) form.reset();
}

let activeChallengeKey = 'water';
const UNIV_CHALLENGES = {
  water: {
    title: "Low-Cost Fluoride & Heavy Metal Water Filtration",
    badge: "JH-2026-W01 • Dumka (Shikaripara)",
    domain: "Water Engineering • Environmental Biotech",
    urgency: "High Priority • 8 Villages Affected",
    statement: "Handpumps across 8 villages in Shikaripara exhibit fluoride concentration of 3.8 mg/L (WHO permissible limit: 1.5 mg/L). Citizens suffer from skeletal fluorosis, dental discoloration, and severe joint stiffness.",
    fieldConstraints: [
      "Zero continuous electricity supply at pump sites; requires gravity or solar-assist operation.",
      "Local community maintenance using indigenous clay, activated alumina, or bio-char media.",
      "Capital expenditure target below ₹25,000 per handpump filtration unit."
    ],
    grant: "₹3,50,000 CSR Grant available from Jharkhand State Innovation Fund & Tata Steel Foundation."
  },
  agri: {
    title: "Smart Evaporative Cold-Storage for Tomato Farmers",
    badge: "JH-2026-A02 • Hazaribagh & Ranchi",
    domain: "Agricultural Eng. • IoT & Thermal Automation",
    urgency: "Medium Priority • 42 Farmers Co-operative",
    statement: "Smallholder tomato farmers experience 35% post-harvest spoilage during March-June due to lack of decentralized cold storage, forcing distress sales at ₹3/kg.",
    fieldConstraints: [
      "Must utilize zero-energy cool chamber (ZECC) design with solar misting nozzles.",
      "Internal temperature maintained between 16°C–20°C with 85% relative humidity.",
      "Capacity for 2.5 metric tonnes storage with battery backup."
    ],
    grant: "₹2,80,000 Seed Grant available via NABARD Rural Innovation Pipeline."
  },
  env: {
    title: "Decentralized Village Plastic Waste Pyrolysis & Recovery",
    badge: "JH-2026-E03 • Ranchi & Ramgarh",
    domain: "Chemical Eng. • Waste Management • Circular Economy",
    urgency: "High Priority • Peri-urban Watershed",
    statement: "Multi-layered plastic packaging from weekly rural haats clogs storm drains and agricultural runoff streams, leaching microplastics into irrigation reservoirs.",
    fieldConstraints: [
      "Decentralized batch shredding and thermal recovery under 300°C without toxic dioxin fumes.",
      "Produces aggregate binding additive for rural road construction (PMGSY compliance).",
      "Low operating skill requirement for self-help group (SHG) management."
    ],
    grant: "₹4,20,000 Innovation Pilot Co-funded by State Urban Development Agency (SUDA)."
  }
};

function openChallengeModal(challengeKey, btn) {
  activeChallengeKey = challengeKey;
  const challenge = UNIV_CHALLENGES[challengeKey] || UNIV_CHALLENGES.water;
  const modal = document.getElementById('univReviewChallengeModal');
  const badge = document.getElementById('univChallengeBadge');
  const title = document.getElementById('univChallengeModalTitle');
  const content = document.getElementById('univChallengeDetailContent');

  if (badge) badge.textContent = challenge.badge;
  if (title) title.textContent = challenge.title;

  if (content) {
    content.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
        <div>
          <span class="tag water" style="font-size:11px; padding:3px 10px;">${challenge.domain}</span>
          <span style="display:block; font-size:12px; color:var(--muted); margin-top:4px;">🚨 ${challenge.urgency}</span>
        </div>
      </div>
      <div style="margin-bottom:12px;">
        <strong style="display:block; font-size:13px; color:var(--ink); margin-bottom:4px;">Field Problem Statement:</strong>
        <p style="font-size:13px; color:var(--muted); line-height:1.5; margin:0;">${challenge.statement}</p>
      </div>
      <div style="background:var(--card); border:1px solid var(--line); border-radius:8px; padding:12px; margin-bottom:12px;">
        <strong style="display:block; font-size:12px; text-transform:uppercase; color:var(--accent); font-weight:700; margin-bottom:6px;">Key Field Constraints & Guidelines:</strong>
        <ul style="margin:0; padding-left:18px; font-size:12.5px; color:var(--ink); line-height:1.6;">
          ${challenge.fieldConstraints.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
      <div style="background:rgba(16, 185, 129, 0.08); border:1px solid rgba(16, 185, 129, 0.25); border-radius:8px; padding:10px 14px; font-size:12.5px; color:#059669;">
        💰 <strong>Matching Support:</strong> ${challenge.grant}
      </div>
    `;
  }

  if (modal) {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
  }
}

function closeChallengeModal() {
  const modal = document.getElementById('univReviewChallengeModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}

function handleUnivReviewChallengeBackdrop(event) {
  if (event.target && event.target.id === 'univReviewChallengeModal') {
    closeChallengeModal();
  }
}

function claimCurrentChallenge() {
  const challenge = UNIV_CHALLENGES[activeChallengeKey] || UNIV_CHALLENGES.water;
  const btn = document.getElementById(`univBtn-${activeChallengeKey}`);
  if (btn) {
    btn.textContent = 'Claimed by Your Lab ✓';
    btn.disabled = true;
    btn.style.background = '#16a34a';
  }
  closeChallengeModal();
  toast(currentLang === 'hi' ? `चुनौती "${challenge.title}" को आपकी लैब द्वारा स्वीकार कर लिया गया है!` : (currentLang === 'sat' ? `ᱮᱴᱠᱮᱴᱚᱬᱮ ᱞᱮᱵᱽ ᱦᱟᱛᱟᱣ ᱠᱮᱫᱟᱭ!` : `Challenge "${challenge.title}" claimed for your University Lab! ✓`));
}

function printChallengeBrief() {
  closeChallengeModal();
  window.print();
}

// ==========================================================================
// INDUSTRY & CSR FILTERING, PLEDGES & COMMITMENTS HANDLERS
// ==========================================================================
function filterIndustryProjects() {
  const searchInput = document.getElementById('indSearchInput');
  const domainSelect = document.getElementById('indDomainFilter');
  const supportSelect = document.getElementById('indSupportFilter');
  const noResults = document.getElementById('indNoResults');

  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
  const domain = domainSelect ? domainSelect.value : 'all';
  const support = supportSelect ? supportSelect.value : 'all';

  const cards = document.querySelectorAll('#industryCardsGrid .problemcard');
  let visibleCount = 0;

  cards.forEach(card => {
    const cardDomain = card.getAttribute('data-domain') || '';
    const cardSupport = (card.getAttribute('data-support') || '').toLowerCase();
    const cardDistrict = (card.getAttribute('data-district') || '').toLowerCase();
    const cardTitle = (card.getAttribute('data-title') || '').toLowerCase();
    const cardText = card.innerText.toLowerCase();

    const matchesDomain = (domain === 'all' || cardDomain === domain);
    const matchesSupport = (support === 'all' || cardSupport.includes(support));
    const matchesQuery = (!query || cardTitle.includes(query) || cardDistrict.includes(query) || cardText.includes(query));

    if (matchesDomain && matchesSupport && matchesQuery) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (noResults) {
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }
}

let activePledgeProject = 'water';
const PLEDGE_PROJECTS = {
  water: {
    title: "Rural Water Purification",
    district: "Dumka",
    org: "BIT Mesra • Student & Faculty Team",
    totalReq: "₹5,00,000",
    openNeeds: "₹2L seed funding, fabrication access, field testing with 50 households"
  },
  agri: {
    title: "Smart Irrigation for Small Farms",
    district: "Hazaribagh",
    org: "VBU Hazaribagh • AgriTech Innovation Group",
    totalReq: "₹2,50,000",
    openNeeds: "IoT sensors, prototype machining, 2 village demo plots"
  },
  env: {
    title: "Community Plastic Recovery",
    district: "Ranchi",
    org: "Ranchi University + Swachh Jharkhand NGO",
    totalReq: "₹8,00,000",
    openNeeds: "CSR equipment grant, plastic pelletizing partner, collection logistics"
  }
};

function openPledgeModal(projectId, btn) {
  activePledgeProject = projectId;
  const project = PLEDGE_PROJECTS[projectId] || PLEDGE_PROJECTS.water;
  const modal = document.getElementById('indPledgeModal');
  const targetBox = document.getElementById('indPledgeTargetBox');

  if (targetBox) {
    targetBox.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
        <div>
          <strong style="font-size:16px; color:var(--ink);">${project.title}</strong>
          <div style="color:var(--muted); font-size:12px;">📍 ${project.district} • 🏛️ ${project.org}</div>
        </div>
        <div style="text-align:right;">
          <b style="font-size:15px; color:var(--ink);">${project.totalReq}</b>
          <small style="display:block; font-size:10px; text-transform:uppercase; color:var(--muted);">Requirement</small>
        </div>
      </div>
      <p style="font-size:12px; color:var(--ink); margin:0; line-height:1.4;"><strong>Open Support Needs:</strong> ${project.openNeeds}</p>
    `;
  }

  if (modal) {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
  }
}

function closePledgeModal() {
  const modal = document.getElementById('indPledgeModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}

function handleIndPledgeBackdrop(event) {
  if (event.target && event.target.id === 'indPledgeModal') {
    closePledgeModal();
  }
}

function handlePledgeSubmit(event) {
  if (event) event.preventDefault();
  const orgName = document.getElementById('pledgeOrgName')?.value || 'Partner Enterprise';
  const repName = document.getElementById('pledgeRepName')?.value || 'CSR Lead';
  const email = document.getElementById('pledgeEmail')?.value || '';
  const phone = document.getElementById('pledgePhone')?.value || '';
  const amount = document.getElementById('pledgeAmountInput')?.value || 'In-Kind Support';
  const notes = document.getElementById('pledgeNotes')?.value || '';

  const types = [];
  document.querySelectorAll('#indPledgeForm input[name="pledgeTypes"]:checked').forEach(cb => {
    types.push(cb.value);
  });

  const project = PLEDGE_PROJECTS[activePledgeProject] || PLEDGE_PROJECTS.water;

  const pledgeRecord = {
    id: "CSR-" + Date.now().toString().slice(-4),
    projectTitle: project.title,
    district: project.district,
    orgName,
    repName,
    email,
    phone,
    amount,
    types: types.length ? types : ["Corporate Partnership"],
    notes,
    date: new Date().toLocaleDateString(),
    status: "Active Commitment"
  };

  try {
    const existing = JSON.parse(localStorage.getItem('aapv_csr_commitments') || '[]');
    existing.unshift(pledgeRecord);
    localStorage.setItem('aapv_csr_commitments', JSON.stringify(existing));
  } catch (e) {}

  closePledgeModal();
  toast(currentLang === 'hi' ? `धन्यवाद ${orgName}! "${project.title}" के लिए आपका सीएसआर सहयोग संकल्प पंजीकृत हुआ।` : (currentLang === 'sat' ? `ᱥᱟᱨᱦᱟᱣ ${orgName}! ᱟᱢᱟᱜ CSR ᱜᱚᱲᱚ ᱨᱮᱡᱤᱥᱴᱟᱨ ᱮᱱᱟ᱾` : `Thank you ${orgName}! CSR Pledge confirmed for "${project.title}".`));

  const form = document.getElementById('indPledgeForm');
  if (form) form.reset();
}

function openMyCommitmentsModal() {
  const modal = document.getElementById('indCommitmentsModal');
  const list = document.getElementById('indCommitmentsList');

  let commitments = [];
  try {
    commitments = JSON.parse(localStorage.getItem('aapv_csr_commitments') || '[]');
  } catch (e) {}

  if (!commitments.length) {
    commitments = [
      {
        id: "CSR-9410",
        projectTitle: "Rural Water Purification (Dumka)",
        district: "Dumka",
        orgName: "Tata Steel CSR Foundation",
        amount: "₹2,00,000 Grant + Fabrication Tooling",
        types: ["Funding Grant", "Manufacturing Access"],
        date: "12 Sept 2026",
        status: "Active Sponsoring"
      },
      {
        id: "CSR-8821",
        projectTitle: "Solar Microgrid Diagnostic Sensors",
        district: "Giridih",
        orgName: "Adani Green Energy Ltd",
        amount: "₹1,50,000 Sensor Donation",
        types: ["Equipment & Hardware", "Field Sandboxing"],
        date: "04 Sept 2026",
        status: "Field Pilot Phase"
      }
    ];
  }

  if (list) {
    list.innerHTML = commitments.map(c => `
      <div style="background:var(--card); border:1px solid var(--line); border-radius:10px; padding:14px; display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <strong style="font-size:14.5px; color:var(--ink);">${c.projectTitle}</strong>
            <span class="tag water" style="font-size:10px; padding:2px 8px;">${c.id}</span>
          </div>
          <div style="font-size:12px; color:var(--muted); margin-bottom:6px;">🏢 ${c.orgName} • 📍 ${c.district} • 📅 ${c.date}</div>
          <div style="font-size:12.5px; color:var(--ink);">
            <strong>Commitment:</strong> <span style="color:#059669; font-weight:600;">${c.amount}</span>
          </div>
          <div style="margin-top:6px; display:flex; flex-wrap:wrap; gap:4px;">
            ${(c.types || []).map(t => `<span style="background:var(--bg); border:1px solid var(--line); font-size:11px; padding:2px 8px; border-radius:4px; color:var(--ink);">${t}</span>`).join('')}
          </div>
        </div>
        <span style="background:rgba(16,185,129,0.12); color:#059669; font-size:11px; font-weight:700; padding:4px 10px; border-radius:20px; white-space:nowrap;">${c.status}</span>
      </div>
    `).join('');
  }

  if (modal) {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
  }
}

function closeMyCommitmentsModal() {
  const modal = document.getElementById('indCommitmentsModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}

function handleIndCommitmentsBackdrop(event) {
  if (event.target && event.target.id === 'indCommitmentsModal') {
    closeMyCommitmentsModal();
  }
}

function printCSRCertificate() {
  closeMyCommitmentsModal();
  window.print();
}

// Backward-compatibility alias
function supportProject(btn) {
  const card = btn ? btn.closest('.problemcard') : null;
  const domain = card ? card.getAttribute('data-domain') : 'water';
  openPledgeModal(domain || 'water', btn);
}

function toggleTapToHearMode() {
  isTapToHearActive = !isTapToHearActive;
  const toggleBtn = document.getElementById('tapHearToggle');
  if (toggleBtn) {
    toggleBtn.classList.toggle('on', isTapToHearActive);
  }
  if (isTapToHearActive) {
    toast(currentLang === 'hi' ? 'छूकर सुनने का मोड (शोकेस मोड) चालू हुआ!' : (currentLang === 'sat' ? 'ᱡᱚᱴᱮᱫ ᱟᱸᱡᱚᱢ ᱢᱳᱰ (Showcase Mode) ᱪᱟᱹᱞᱩ ᱮᱱᱟ!' : 'Tap-to-Hear mode (Showcase Mode) ON!'));
  } else {
    stopSpeaking(true);
    toast(currentLang === 'hi' ? 'छूकर सुनने का मोड बंद हुआ।' : (currentLang === 'sat' ? 'ᱡᱚᱴᱮᱫ ᱟᱸᱡᱚᱢ ᱢᱳᱰ ᱵᱚᱱᱫᱽ ᱮᱱᱟ᱾' : 'Tap-to-Hear mode OFF.'));
  }
}

document.addEventListener('click', (e) => {
  if (!isTapToHearActive) return;
  if (e.target.closest('button, input, textarea, select, .audio-guide-bar, .topbar, .lang-menu, .auth-nav, .portal-footer')) return;

  const target = e.target.closest('h1, h2, h3, h4, p, label, small, b, strong, article, .problemcard, .contact-card, [data-narrate-item]');
  if (target && (target.innerText || target.textContent).trim().length > 2) {
    e.preventDefault();
    narrateElement(target);
  }
});

// ==========================================================================
// JHARKHAND COMMUNITY PROJECTS & GRIEVANCES REPOSITORY
// ==========================================================================
const DISTRICT_NAMES = {
  "Dumka": { en: "Dumka", hi: "दुमका", sat: "ᱫᱩᱢᱠᱟᱹ" },
  "Hazaribagh": { en: "Hazaribagh", hi: "हजारीबाग", sat: "ᱦᱟᱡᱟᱨᱤᱵᱟᱜᱽ" },
  "Giridih": { en: "Giridih", hi: "गिरिडीह", sat: "ᱜᱤᱨᱤᱰᱤᱦ" },
  "Dhanbad": { en: "Dhanbad", hi: "धनबाद", sat: "ᱫᱷᱟᱱᱵᱟᱫᱽ" },
  "Ranchi": { en: "Ranchi", hi: "रांची", sat: "ᱨᱟᱺᱪᱤ" },
  "East Singhbhum": { en: "East Singhbhum", hi: "पूर्वी सिंहभूम", sat: "ᱥᱟᱢᱟᱝ ᱥᱤᱝᱵᱷᱩᱢ" },
  "Simdega": { en: "Simdega", hi: "सिमडेगा", sat: "ᱥᱤᱢᱰᱮᱜᱟ" },
  "Khunti": { en: "Khunti", hi: "खूंटी", sat: "ᱠᱷᱩᱸᱴᱤ" }
};

const PROJECTS_DATA = [
  {
    id: "AAPV-2026-0842",
    title: {
      en: "Low-cost Rural Water Purification",
      hi: "कम लागत वाला ग्रामीण जल शोधन संयंत्र",
      sat: "ᱠᱚᱢ ᱠᱷᱚᱨᱪᱟ ᱟᱹᱛᱩ ᱫᱟᱜ ᱥᱟᱯᱷᱟ ᱠᱟᱹᱢᱤ"
    },
    domain: "water",
    domainLabel: { en: "Water", hi: "जल", sat: "ᱫᱟᱜ" },
    district: "Dumka",
    status: "ongoing",
    statusLabel: { en: "Ongoing Prototype", hi: "निर्माणाधीन प्रोटोटाइप", sat: "ᱪᱟᱹᱞᱩ ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ" },
    stage: { en: "Stage 3: Field Prototype Testing", hi: "चरण 3: ज़मीनी प्रोटोटाइप परीक्षण", sat: "ᱫᱷᱟᱯ ᱓: ᱡᱟᱭᱜᱟ ᱨᱮ ᱴᱮᱥᱴ" },
    progress: 68,
    problem: {
      en: "High iron and bacterial contamination in 8 village handpumps across Shikaripara, causing gastrointestinal illnesses.",
      hi: "शिकारीपाड़ा के 8 चापाकलों में अत्यधिक आयरन और बैक्टीरिया संदूषण, जिससे ग्रामीणों में पेट संबंधी बीमारियां हो रही थीं।",
      sat: "ᱥᱤᱠᱟᱨᱤᱯᱟᱲᱟ ᱨᱮ ᱘ ᱜᱚᱴᱟᱝ ᱪᱟᱯᱟᱠᱚᱞ ᱨᱮ ᱵᱟᱹᱲᱤᱡ ᱫᱟᱜ ᱛᱟᱦᱮᱸ ᱠᱟᱱᱟ, ᱡᱟᱦᱟᱸ ᱛᱮ ᱦᱚᱲ ᱠᱚ ᱨᱩᱣᱟᱹᱜ ᱠᱟᱱ ᱛᱟᱦᱮᱸᱫ᱾"
    },
    lead: {
      en: "BIT Mesra • Dr. Ananya Kumar",
      hi: "बीआईटी मेसरा • डॉ. अनन्या कुमार",
      sat: "BIT Mesra • ᱰᱨ. ᱚᱱᱚᱱᱭᱟ ᱠᱩᱢᱟᱨ"
    },
    teamSize: "4 Students, 1 Professor",
    date: {
      en: "Updated 2 days ago",
      hi: "2 दिन पहले अपडेट किया गया",
      sat: "᱒ ᱢᱟᱦᱟᱸ ᱢᱟᱬᱟᱝ ᱱᱟᱶᱟ ᱠᱟᱛᱷᱟ"
    },
    beneficiaries: {
      en: "4,200 villagers",
      hi: "4,200 ग्रामीण",
      sat: "᱔,᱒᱐᱐ ᱟᱹᱛᱩ ᱦᱚᱲ"
    }
  },
  {
    id: "AAPV-2026-0914",
    title: {
      en: "IoT Smart Soil Moisture & Drip Irrigation",
      hi: "आईओटी स्मार्ट मृदा नमी एवं ड्रिप सिंचाई प्रणाली",
      sat: "IoT ᱦᱟᱥᱟ ᱟᱞᱦᱟᱫ ᱟᱨ ᱫᱟᱜ ᱫᱩᱞ ᱥᱤᱥᱴᱚᱢ"
    },
    domain: "agri",
    domainLabel: { en: "Agriculture", hi: "कृषि", sat: "ᱪᱟᱥ" },
    district: "Hazaribagh",
    status: "ongoing",
    statusLabel: { en: "Ongoing Prototype", hi: "निर्माणाधीन प्रोटोटाइप", sat: "ᱪᱟᱹᱞᱩ ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ" },
    stage: { en: "Stage 2: Sensor Calibration & Circuit Design", hi: "चरण 2: सेंसर अंशांकन और सर्किट डिजाइन", sat: "ᱫᱷᱟᱯ ᱒: ᱥᱮᱱᱥᱚᱨ ᱥᱟᱯᱲᱟᱣ" },
    progress: 45,
    problem: {
      en: "Severe dry season water shortages for vegetable farmers in Ichak block, leading to high fuel costs for diesel pumps.",
      hi: "इचाक प्रखंड में सब्जी उत्पादक किसानों को ग्रीष्मकाल में पानी की भारी किल्लत, जिससे डीजल पंप का खर्च बहुत बढ़ जाता है।",
      sat: "ᱤᱪᱟᱠ ᱨᱮ ᱪᱟᱹᱥᱤ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱫᱟᱜ ᱨᱮᱭᱟᱜ ᱟᱱᱟᱴ, ᱰᱤᱡᱮᱞ ᱯᱟᱢᱯ ᱨᱮ ᱰᱷᱮᱨ ᱠᱷᱚᱨᱪᱟ ᱦᱩᱭᱩᱜ ᱠᱟᱱ ᱛᱟᱦᱮᱸᱫ᱾"
    },
    lead: {
      en: "VBU Hazaribagh • Prof. Rajesh Sinha",
      hi: "विभावि हजारीबाग • प्रो. राजेश सिन्हा",
      sat: "VBU ᱦᱟᱡᱟᱨᱤᱵᱟᱜᱽ • ᱯᱨᱳ. ᱨᱟᱡᱮᱥ ᱥᱤᱱᱦᱟ"
    },
    teamSize: "3 Engineering Scholars",
    date: {
      en: "Updated 4 days ago",
      hi: "4 दिन पहले अपडेट किया गया",
      sat: "᱔ ᱢᱟᱦᱟᱸ ᱢᱟᱬᱟᱝ ᱱᱟᱶᱟ ᱠᱟᱛᱷᱟ"
    },
    beneficiaries: {
      en: "350 smallholder farmers",
      hi: "350 छोटे किसान",
      sat: "᱓᱕᱐ ᱪᱟᱹᱥᱤ ᱠᱚ"
    }
  },
  {
    id: "AAPV-2026-1033",
    title: {
      en: "Decentralized Solar Cold Storage for SHG Produce",
      hi: "महिला स्वयं सहायता समूहों हेतु विकेंद्रीकृत सौर कोल्ड स्टोरेज",
      sat: "ᱛᱤᱨᱞᱟᱹ ᱜᱟᱶᱛᱟ ᱞᱟᱹᱜᱤᱫ ᱥᱳᱞᱟᱨ ᱠᱳᱞᱰ ᱥᱴᱳᱨᱮᱡᱽ"
    },
    domain: "env",
    domainLabel: { en: "Energy & Cold Chain", hi: "ऊर्जा एवं कोल्ड चेन", sat: "ᱥᱳᱞᱟᱨ ᱫᱟᱲᱮ" },
    district: "Giridih",
    status: "ongoing",
    statusLabel: { en: "Ongoing Prototype", hi: "निर्माणाधीन प्रोटोटाइप", sat: "ᱪᱟᱹᱞᱩ ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ" },
    stage: { en: "Stage 3: Thermal Battery Field Testing", hi: "चरण 3: थर्मल बैटरी फील्ड ट्रायल", sat: "ᱫᱷᱟᱯ ᱓: ᱛᱷᱟᱨᱢᱟᱞ ᱵᱮᱴᱨᱤ ᱴᱮᱥᱴ" },
    progress: 78,
    problem: {
      en: "Perishable tomato and green chilli harvest rotting due to lack of electricity and cold storage, forcing distress sales.",
      hi: "बिजली न होने से टमाटर और मिर्च की फसल खराब होने से भारी नुकसान, किसानों को औने-पौने दाम पर बेचने की मजबूरी।",
      sat: "ᱴᱟᱢᱟᱴᱟᱨ ᱟᱨ ᱢᱟᱹᱨᱤᱪ ᱵᱟᱝ ᱫᱚᱦᱚ ᱜᱟᱱᱚᱜ ᱠᱷᱟᱹᱛᱤᱨ ᱥᱮᱭᱟᱜ ᱠᱟᱱ ᱛᱟᱦᱮᱸᱫ᱾"
    },
    lead: {
      en: "NIT Jamshedpur • Dr. Priya Verma",
      hi: "एनआईटी जमशेदपुर • डॉ. प्रिया वर्मा",
      sat: "NIT ᱡᱟᱢᱥᱮᱫᱽᱯᱩᱨ • ᱰᱨ. ᱯᱨᱤᱭᱟ ᱵᱚᱨᱢᱟ"
    },
    teamSize: "5 Mechanical & Electrical Scholars",
    date: {
      en: "Updated yesterday",
      hi: "कल अपडेट किया गया",
      sat: "ᱦᱚᱞᱟ ᱱᱟᱶᱟ ᱠᱟᱛᱷᱟ"
    },
    beneficiaries: {
      en: "180 Women SHG Members",
      hi: "180 महिला एसएचजी सदस्य",
      sat: "᱑᱘᱐ ᱛᱤᱨᱞᱟᱹ ᱜᱟᱶᱛᱟ ᱨᱟᱹᱥᱤᱭᱟᱹ"
    }
  },
  {
    id: "AAPV-2026-0412",
    title: {
      en: "Arsenic & Iron Well Water Filtration Unit",
      hi: "आर्सेनिक एवं आयरन कुआं जल शोधन इकाई",
      sat: "ᱠᱩᱧ ᱫᱟᱜ ᱟᱨᱥᱮᱱᱤᱠ ᱥᱟᱯᱷᱟ ᱠᱟᱹᱢᱤᱦᱚᱨᱟ"
    },
    domain: "water",
    domainLabel: { en: "Water", hi: "जल", sat: "ᱫᱟᱜ" },
    district: "Dhanbad",
    status: "completed",
    statusLabel: { en: "Completed & Deployed", hi: "पूर्ण एवं स्थापित", sat: "ᱯᱩᱨᱟᱹᱣ ᱟᱨ ᱞᱟᱜᱟᱣ ᱟᱠᱟᱱ" },
    stage: { en: "Stage 4: Successfully Deployed & Maintained", hi: "चरण 4: सफलतापूर्वक स्थापित एवं समुदाय को समर्पित", sat: "ᱫᱷᱟᱯ ᱔: ᱯᱩᱨᱟᱹᱣ ᱠᱟᱛᱮ ᱟᱹᱛᱩ ᱦᱚᱲ ᱮᱢ ᱮᱱᱟ" },
    progress: 100,
    problem: {
      en: "Drinking wells in Nirsa block had hazardous arsenic levels exceeding WHO limits, affecting over 1,200 households.",
      hi: "निरसा प्रखंड के कुओं में खतरनाक स्तर का आर्सेनिक पाया गया था, जिससे 1,200 से अधिक परिवार प्रभावित थे।",
      sat: "ᱱᱤᱨᱥᱟ ᱨᱮ ᱠᱩᱧ ᱫᱟᱜ ᱨᱮ ᱵᱤᱥ ᱞᱮᱠᱟ ᱟᱨᱥᱮᱱᱤᱠ ᱛᱟᱦᱮᱸ ᱠᱟᱱᱟ, ᱑,᱒᱐᱐ ᱜᱷᱟᱨᱚᱸᱡᱽ ᱠᱚ ᱦᱟᱨᱠᱮᱛ ᱞᱮᱱᱟ᱾"
    },
    lead: {
      en: "IIT (ISM) Dhanbad • Environmental Lab",
      hi: "आईआईटी (आईएसएम) धनबाद • पर्यावरण लैब",
      sat: "IIT (ISM) ᱫᱷᱟᱱᱵᱟᱫᱽ • ᱯᱚᱨᱤᱵᱮᱥ ᱞᱮᱵᱽ"
    },
    teamSize: "Deans & Innovation Cell",
    date: {
      en: "Completed July 2026",
      hi: "जुलाई 2026 में पूर्ण",
      sat: "ᱡᱩᱞᱟᱭ ᱒᱐᱒᱖ ᱨᱮ ᱯᱩᱨᱟᱹᱣ ᱮᱱᱟ"
    },
    beneficiaries: {
      en: "5,600 residents",
      hi: "5,600 निवासी",
      sat: "᱕,᱖᱐᱐ ᱦᱚᱲ"
    }
  },
  {
    id: "AAPV-2026-0529",
    title: {
      en: "Community Biogas & Waste-to-Energy Unit",
      hi: "सामुदायिक बायोगैस एवं अपशिष्ट-से-ऊर्जा इकाई",
      sat: "ᱟᱹᱛᱩ ᱵᱟᱭᱳᱜᱮᱥ ᱟᱨ ᱠᱩᱪᱨᱟ ᱠᱷᱚᱱ ᱫᱟᱲᱮ"
    },
    domain: "env",
    domainLabel: { en: "Environment", hi: "पर्यावरण", sat: "ᱯᱚᱨᱤᱵᱮᱥ" },
    district: "Ranchi",
    status: "completed",
    statusLabel: { en: "Completed & Deployed", hi: "पूर्ण एवं स्थापित", sat: "ᱯᱩᱨᱟᱹᱣ ᱟᱨ ᱞᱟᱜᱟᱣ ᱟᱠᱟᱱ" },
    stage: { en: "Stage 4: Commissioned & Operating", hi: "चरण 4: चालू एवं नियमित संचालित", sat: "ᱫᱷᱟᱯ ᱔: ᱪᱟᱹᱞᱩ ᱟᱨ ᱠᱟᱹᱢᱤ ᱠᱟᱱᱟ" },
    progress: 100,
    problem: {
      en: "Accumulation of cattle dung causing village sanitation hazards and heavy wood logging for cooking fuel in Ormanjhi.",
      hi: "ओरमांझी में गोबर के ढेर से गंदगी और खाना पकाने के लिए जंगल की लकड़ियों पर निर्भरता।",
      sat: "ᱚᱨᱢᱟᱧᱡᱷᱤ ᱨᱮ ᱜᱟᱹᱭ ᱜᱩᱨᱤᱡ ᱟᱨ ᱥᱟᱦᱟᱱ ᱞᱟᱹᱜᱤᱫ ᱵᱤᱨ ᱢᱟᱜ ᱨᱮᱭᱟᱜ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱛᱟᱦᱮᱸ ᱠᱟᱱᱟ᱾"
    },
    lead: {
      en: "Birsa Agricultural University (BAU) Ranchi",
      hi: "बिरसा कृषि विश्वविद्यालय (बीएयू) रांची",
      sat: "ᱵᱤᱨᱥᱟ ᱪᱟᱥ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ (BAU) ᱨᱟᱺᱪᱤ"
    },
    teamSize: "Renewable Energy Cell",
    date: {
      en: "Completed August 2026",
      hi: "अगस्त 2026 में पूर्ण",
      sat: "ᱚᱜᱚᱥᱴ ᱒᱐᱒᱖ ᱨᱮ ᱯᱩᱨᱟᱹᱣ ᱮᱱᱟ"
    },
    beneficiaries: {
      en: "140 households",
      hi: "140 परिवार",
      sat: "᱑᱔᱐ ᱜᱷᱟᱨᱚᱸᱡᱽ"
    }
  },
  {
    id: "AAPV-2026-0681",
    title: {
      en: "Smart Low-Cost Solar Classroom Lighting & Projector",
      hi: "स्मार्ट कम लागत वाली सौर कक्षा प्रकाश एवं प्रोजेक्टर",
      sat: "ᱟᱥᱲᱟ ᱞᱟᱹᱜᱤᱫ ᱥᱳᱞᱟᱨ ᱵᱟᱹᱛᱤ ᱟᱨ ᱯᱨᱳᱡᱮᱠᱴᱟᱨ"
    },
    domain: "edu",
    domainLabel: { en: "Education", hi: "शिक्षा", sat: "ᱥᱮᱪᱮᱫ" },
    district: "East Singhbhum",
    status: "completed",
    statusLabel: { en: "Completed & Deployed", hi: "पूर्ण एवं स्थापित", sat: "ᱯᱩᱨᱟᱹᱣ ᱟᱨ ᱞᱟᱜᱟᱣ ᱟᱠᱟᱱ" },
    stage: { en: "Stage 4: Deployed in 8 Tribal Schools", hi: "चरण 4: 8 प्राथमिक आदिवासी विद्यालयों में स्थापित", sat: "ᱫᱷᱟᱯ ᱔: ᱘ ᱜᱚᱴᱟᱝ ᱟᱥᱲᱟ ᱨᱮ ᱞᱟᱜᱟᱣ ᱮᱱᱟ" },
    progress: 100,
    problem: {
      en: "Frequent power cuts lasting days disrupted digital learning and basic classroom lighting in Ghatshila block.",
      hi: "घाटशिला प्रखंड में बिजली गुल रहने से बच्चों की डिजिटल पढ़ाई और कक्षाओं में रोशनी की भारी समस्या थी।",
      sat: "ᱜᱷᱟᱴᱥᱤᱞᱟᱹ ᱨᱮ ᱞᱟᱭᱤᱴ ᱵᱟᱝ ᱛᱟᱦᱮᱸᱱ ᱠᱷᱟᱹᱛᱤᱨ ᱜᱤᱫᱽᱨᱟᱹ ᱠᱚ ᱯᱟᱲᱦᱟᱣ ᱨᱮ ᱟᱱᱟᱴ ᱦᱩᱭᱩᱜ ᱠᱟᱱ ᱛᱟᱦᱮᱸᱫ᱾"
    },
    lead: {
      en: "Kolhan University • Chaibasa",
      hi: "कोल्हान विश्वविद्यालय • चाईबासा",
      sat: "ᱠᱳᱞᱦᱟᱱ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ • ᱪᱟᱭᱵᱟᱥᱟ"
    },
    teamSize: "Physics & CS Dept",
    date: {
      en: "Completed June 2026",
      hi: "जून 2026 में पूर्ण",
      sat: "ᱡᱩᱱ ᱒᱐᱒᱖ ᱨᱮ ᱯᱩᱨᱟᱹᱣ ᱮᱱᱟ"
    },
    beneficiaries: {
      en: "1,150 school students",
      hi: "1,150 स्कूली छात्र",
      sat: "᱑,᱑᱕᱐ ᱟᱥᱲᱟ ᱜᱤᱫᱽᱨᱟᱹ"
    }
  },
  {
    id: "AAPV-2026-1188",
    title: {
      en: "Suspended Bamboo-Steel Footbridge for Monsoon Access",
      hi: "मानसून में नदी पार करने हेतु बांस-स्टील झूला पुल",
      sat: "ᱡᱟᱹᱯᱩᱫ ᱫᱤᱱ ᱜᱟᱰᱟ ᱯᱟᱨᱚᱢ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱠᱷᱳ"
    },
    domain: "health",
    domainLabel: { en: "Connectivity & Safety", hi: "संपर्क एवं सुरक्षा", sat: "ᱥᱩᱨᱚᱠᱷᱤᱛ ᱰᱟᱦᱟᱨ" },
    district: "Simdega",
    status: "available",
    statusLabel: { en: "Available for Adoption", hi: "गोद लेने हेतु उपलब्ध", sat: "ᱦᱟᱛᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱢᱮᱱᱟᱜ-ᱟ" },
    stage: { en: "Stage 1: Verified by AI & Admin • Open for Colleges", hi: "चरण 1: सत्यापित • विश्वविद्यालयी टीमों के लिए खुला", sat: "ᱫᱷᱟᱯ ᱑: ᱯᱩᱥᱴᱟᱹᱣ ᱟᱠᱟᱱᱟ • ᱠᱚᱞᱮᱡᱽ ᱞᱟᱹᱜᱤᱫ ᱡᱷᱤᱡ" },
    progress: 15,
    problem: {
      en: "During heavy rains, schoolchildren and pregnant mothers in Kolebira are cut off from the primary health sub-center by swollen stream.",
      hi: "भारी बारिश में कोलेबिरा के स्कूली बच्चे और गर्भवती महिलाएं उफनती नदी के कारण प्राथमिक स्वास्थ्य केंद्र से कट जाते हैं।",
      sat: "ᱡᱟᱹᱯᱩᱫ ᱨᱮ ᱠᱚᱞᱮᱵᱤᱨᱟ ᱨᱤᱱ ᱜᱤᱫᱽᱨᱟᱹ ᱟᱨ ᱦᱟᱢᱟᱞ ᱦᱚᱲᱢᱚ ᱟᱭᱳ ᱠᱚ ᱦᱟᱥᱯᱟᱛᱟᱞ ᱵᱟᱝ ᱠᱚ ᱥᱮᱴᱮᱨ ᱫᱟᱲᱮᱭᱟᱜ-ᱟ᱾"
    },
    lead: {
      en: "Open for Civil / Structural Engineering Teams",
      hi: "सिविल / स्ट्रक्चरल इंजीनियरिंग टीमों हेतु खुला",
      sat: "ᱥᱤᱵᱷᱤᱞ ᱤᱸᱡᱤᱱᱤᱭᱟᱨᱤᱝ ᱴᱤᱢ ᱞᱟᱹᱜᱤᱫ ᱡᱷᱤᱡ"
    },
    teamSize: "Needed: 1 Professor Mentor, Student Team",
    date: {
      en: "Submitted 6 days ago",
      hi: "6 दिन पहले दर्ज",
      sat: "᱖ ᱢᱟᱦᱟᱸ ᱢᱟᱬᱟᱝ ᱫᱟᱠᱷᱚᱞ ᱟᱠᱟᱱ"
    },
    beneficiaries: {
      en: "Est. 1,800 villagers",
      hi: "अनुमानित 1,800 ग्रामीण",
      sat: "ᱟᱢᱫᱟᱡᱽ ᱑,᱘᱐᱐ ᱟᱹᱛᱩ ᱦᱚᱲ"
    }
  },
  {
    id: "AAPV-2026-1205",
    title: {
      en: "Natural Gravity-Fed Spring Water Piping System",
      hi: "प्राकृतिक गुरुत्वाकर्षण आधारित झरना जल पाइपलाइन",
      sat: "ᱡᱷᱟᱨᱱᱟ ᱫᱟᱜ ᱨᱮᱭᱟᱜ ᱯᱟᱭᱤᱯ ᱞᱟᱭᱤᱱ ᱥᱤᱥᱴᱚᱢ"
    },
    domain: "water",
    domainLabel: { en: "Water", hi: "जल", sat: "ᱫᱟᱜ" },
    district: "Khunti",
    status: "available",
    statusLabel: { en: "Available for Adoption", hi: "गोद लेने हेतु उपलब्ध", sat: "ᱦᱟᱛᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱢᱮᱱᱟᱜ-ᱟ" },
    stage: { en: "Stage 1: Topographic Survey Ready", hi: "चरण 1: स्थलाकृतिक सर्वेक्षण तैयार", sat: "ᱫᱷᱟᱯ ᱑: ᱡᱟᱭᱜᱟ ᱨᱮᱭᱟᱜ ᱱᱚᱠᱥᱟ ᱥᱟᱯᱲᱟᱣ" },
    progress: 20,
    problem: {
      en: "Hillside tribal settlement walks 2.5 km uphill for clean drinking water, while an elevated natural spring flows unused 300m away.",
      hi: "पहाड़ी आदिवासी बस्ती के लोगों को पानी के लिए 2.5 किमी चलना पड़ता है, जबकि 300 मीटर ऊपर शुद्ध प्राकृतिक झरना अप्रयुक्त बह रहा है।",
      sat: "ᱵᱩᱨᱩ ᱟᱹᱛᱩ ᱨᱤᱱ ᱦᱚᱲ ᱫᱟᱜ ᱟᱹᱜᱩ ᱞᱟᱹᱜᱤᱫ ᱒.᱕ ᱠᱤᱞᱳᱢᱤᱴᱟᱨ ᱛᱟᱲᱟᱢ ᱦᱩᱭᱩᱜ ᱠᱟᱱᱟ᱾"
    },
    lead: {
      en: "Open for Rural Tech / Hydrology Labs",
      hi: "ग्रामीण तकनीक / जल विज्ञान लैब हेतु खुला",
      sat: "ᱟᱹᱛᱩ ᱴᱮᱠᱱᱳᱞᱳᱡᱤ / ᱫᱟᱜ ᱥᱟᱬᱮᱥ ᱞᱮᱵᱽ ᱞᱟᱹᱜᱤᱫ ᱡᱷᱤᱡ"
    },
    teamSize: "Needed: Innovation Team",
    date: {
      en: "Submitted 1 week ago",
      hi: "1 सप्ताह पहले दर्ज",
      sat: "᱑ ᱦᱟᱯᱛᱟ ᱢᱟᱬᱟᱝ ᱫᱟᱠᱷᱚᱞ ᱟᱠᱟᱱ"
    },
    beneficiaries: {
      en: "Est. 950 tribal residents",
      hi: "अनुमानित 950 आदिवासी निवासी",
      sat: "ᱟᱢᱫᱟᱡᱽ ᱙᱕᱐ ᱟᱹᱫᱤᱵᱟᱹᱥᱤ ᱦᱚᱲ"
    }
  }
];

// ==========================================================================
// GRIEVANCE TRACKING PAGE LOGIC & FILTERING
// ==========================================================================
let currentTrackingTab = 'all';

function setTrackingTab(tab) {
  currentTrackingTab = tab;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
  });
  renderProjects();
}

function renderProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  const searchQuery = (document.getElementById('trackingSearchInput')?.value || '').toLowerCase().trim();
  const districtFilter = document.getElementById('trackingDistrictFilter')?.value || 'all';
  const domainFilter = document.getElementById('trackingDomainFilter')?.value || 'all';

  const filtered = PROJECTS_DATA.filter(p => {
    const matchesTab = currentTrackingTab === 'all' || p.status === currentTrackingTab;
    const matchesDistrict = districtFilter === 'all' || p.district.toLowerCase() === districtFilter.toLowerCase();
    const matchesDomain = domainFilter === 'all' || p.domain === domainFilter;
    const titleText = (p.title[currentLang] || p.title.en).toLowerCase();
    const probText = (p.problem[currentLang] || p.problem.en).toLowerCase();
    const allTitles = Object.values(p.title).join(' ').toLowerCase();
    const allProblems = Object.values(p.problem).join(' ').toLowerCase();
    const matchesSearch = !searchQuery ||
      p.id.toLowerCase().includes(searchQuery) ||
      p.district.toLowerCase().includes(searchQuery) ||
      titleText.includes(searchQuery) ||
      probText.includes(searchQuery) ||
      allTitles.includes(searchQuery) ||
      allProblems.includes(searchQuery);

    return matchesTab && matchesDistrict && matchesDomain && matchesSearch;
  });

  // Update tab counts
  const countAll = PROJECTS_DATA.length;
  const countOngoing = PROJECTS_DATA.filter(p => p.status === 'ongoing').length;
  const countCompleted = PROJECTS_DATA.filter(p => p.status === 'completed').length;
  const countAvailable = PROJECTS_DATA.filter(p => p.status === 'available').length;

  const elCountAll = document.getElementById('countAll');
  if (elCountAll) elCountAll.textContent = countAll;
  const elCountOngoing = document.getElementById('countOngoing');
  if (elCountOngoing) elCountOngoing.textContent = countOngoing;
  const elCountCompleted = document.getElementById('countCompleted');
  if (elCountCompleted) elCountCompleted.textContent = countCompleted;
  const elCountAvailable = document.getElementById('countAvailable');
  if (elCountAvailable) elCountAvailable.textContent = countAvailable;

  const dict = translations[currentLang] || translations.en;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: var(--card); border-radius: 16px; border: 1px dashed var(--line);">
        <span style="font-size: 32px; display: block; margin-bottom: 10px;">🔍</span>
        <h3 style="font-size: 16px; color: var(--ink); margin-bottom: 6px;">${dict.empty_projects_title || 'No matching grievances or projects found'}</h3>
        <p style="font-size: 13px; color: var(--muted); margin: 0;">${dict.empty_projects_desc || 'Try adjusting your search terms or filters.'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const title = p.title[currentLang] || p.title.en;
    const problem = p.problem[currentLang] || p.problem.en;
    const domainLabel = p.domainLabel[currentLang] || p.domainLabel.en;
    const statusLabel = p.statusLabel[currentLang] || p.statusLabel.en;
    const stage = p.stage[currentLang] || p.stage.en;
    const lead = typeof p.lead === 'object' ? (p.lead[currentLang] || p.lead.en) : p.lead;
    const beneficiaries = typeof p.beneficiaries === 'object' ? (p.beneficiaries[currentLang] || p.beneficiaries.en) : p.beneficiaries;
    const date = typeof p.date === 'object' ? (p.date[currentLang] || p.date.en) : p.date;
    const districtLabel = DISTRICT_NAMES[p.district] ? (DISTRICT_NAMES[p.district][currentLang] || p.district) : p.district;
    const stateLabel = dict.state_jharkhand || 'Jharkhand';
    const partnerHeader = dict.partner_institution || 'Partner Institution';
    const narrateBtnLabel = dict.voice_narrate_btn || '🔊 Listen';
    const narrateBtnText = narrateBtnLabel.replace('🔊', '').trim();

    return `
      <article class="project-card" id="card-${p.id}">
        <div class="project-card-header">
          <span class="project-tag ${p.domain}">${domainLabel}</span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <small style="font-weight: 700; color: var(--muted); font-size: 11px;">#${p.id}</small>
            <span class="project-status-pill ${p.status}">
              ${p.status === 'completed' ? '✓' : (p.status === 'ongoing' ? '⚙' : '✦')} ${statusLabel}
            </span>
          </div>
        </div>

        <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;">
          <h3 id="title-${p.id}">${title}</h3>
          <button type="button" class="narrate-btn" onclick="narrateProjectCard('${p.id}', this)" title="Listen to this update">
            <span class="speaker-icon">🔊</span> <span class="narrate-label">${narrateBtnText}</span>
          </button>
        </div>

        <div class="project-location">
          <span>📍</span>
          <span>${districtLabel}, ${stateLabel}</span>
          <span>•</span>
          <span>👥 ${beneficiaries}</span>
        </div>

        <p class="project-desc" id="desc-${p.id}">${problem}</p>

        <div class="project-pipeline">
          <div class="pipeline-header">
            <span>${stage}</span>
            <strong>${p.progress}%</strong>
          </div>
          <div class="pipeline-track">
            <div class="pipeline-bar ${p.status === 'completed' ? 'completed-bar' : ''}" style="width: ${p.progress}%"></div>
          </div>
          <div class="pipeline-steps">
            <span class="${p.progress >= 20 ? 'done' : ''}">${dict.pipeline_step1 || '1. Triage'}</span>
            <span class="${p.progress >= 40 ? 'done' : ''}">${dict.pipeline_step2 || '2. Prototype'}</span>
            <span class="${p.progress >= 70 ? 'done' : ''}">${dict.pipeline_step3 || '3. Field Test'}</span>
            <span class="${p.progress === 100 ? 'done' : ''}">${dict.pipeline_step4 || '4. Deployed'}</span>
          </div>
        </div>

        <div class="project-footer">
          <div class="project-lead">
            <small style="display:block; font-size:10px; text-transform:uppercase; color:var(--muted); font-weight:700;">${partnerHeader}</small>
            <strong>${lead}</strong>
          </div>
          <span style="font-size: 11px; color: var(--muted);">${date}</span>
        </div>
      </article>
    `;
  }).join('');
}

function narrateProjectCard(id, btn) {
  const p = PROJECTS_DATA.find(x => x.id === id);
  if (!p) return;
  const title = p.title[currentLang] || p.title.en;
  const problem = p.problem[currentLang] || p.problem.en;
  const statusLabel = p.statusLabel[currentLang] || p.statusLabel.en;
  const stage = p.stage[currentLang] || p.stage.en;
  const lead = typeof p.lead === 'object' ? (p.lead[currentLang] || p.lead.en) : p.lead;
  const dict = translations[currentLang] || translations.en;
  const districtLabel = DISTRICT_NAMES[p.district] ? (DISTRICT_NAMES[p.district][currentLang] || p.district) : p.district;
  const stateLabel = dict.state_jharkhand || 'Jharkhand';
  const partnerHeader = dict.partner_institution || 'Partner Institution';

  const cardEl = document.getElementById(`card-${id}`);

  if (btn) {
    if (btn.classList.contains('speaking')) {
      stopSpeaking(true);
      return;
    }
    btn.classList.add('speaking');
    const labelSpan = btn.querySelector('.narrate-label');
    if (labelSpan) {
      if (!labelSpan.hasAttribute('data-original-text')) {
        labelSpan.setAttribute('data-original-text', labelSpan.textContent);
      }
      labelSpan.textContent = translations[currentLang]?.narrate_btn_speaking || 'Stop ⏹';
    }
  }

  const textToSpeak = `${title}. ${districtLabel}, ${stateLabel}. ${statusLabel}. ${stage}. ${problem}. ${partnerHeader}: ${lead}.`;
  narrateText(textToSpeak, cardEl, () => {
    if (btn) {
      btn.classList.remove('speaking');
      const labelSpan = btn.querySelector('.narrate-label');
      if (labelSpan) {
        const orig = labelSpan.getAttribute('data-original-text');
        if (orig) labelSpan.textContent = orig;
      }
    }
  });
}

// ==========================================================================
// 24/7 AI-POWERED MULTILINGUAL CHATBOT ENGINE ("AapV AI Sahayak")
// ==========================================================================
let chatRecognition = null;

function sendChatMessage(textOverride = null) {
  const inputEl = document.getElementById('chatInput');
  const query = (textOverride !== null ? textOverride : (inputEl ? inputEl.value : '')).trim();
  if (!query) return;

  if (inputEl) inputEl.value = '';

  appendChatMessage('user', query);

  const messagesContainer = document.getElementById('chatMessages');
  if (messagesContainer) {
    const typingId = 'typing-' + Date.now();
    const typingEl = document.createElement('div');
    typingEl.className = 'chat-msg bot';
    typingEl.id = typingId;
    typingEl.innerHTML = `
      <div class="chatbot-msg-avatar">🤖</div>
      <div class="msg-bubble" style="color:var(--muted); font-style:italic;">
        ${currentLang === 'hi' ? 'विश्लेषण कर रहे हैं…' : (currentLang === 'sat' ? 'ᱵᱤᱪᱟᱹᱨᱮᱫᱟ…' : 'Analyzing progress data…')}
      </div>
    `;
    messagesContainer.appendChild(typingEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
      const el = document.getElementById(typingId);
      if (el) el.remove();
      const response = generateAIResponse(query);
      appendChatMessage('bot', response.text, response.speechText);
    }, 650);
  }
}

function appendChatMessage(sender, htmlContent, speechText = null) {
  const container = document.getElementById('chatMessages');
  if (!container) return;

  const msgEl = document.createElement('div');
  msgEl.className = `chat-msg ${sender}`;

  const dict = translations[currentLang] || translations.en;
  const listenLabel = dict.voice_narrate_btn || '🔊 Listen';
  const cleanSpeech = (speechText || htmlContent).replace(/<[^>]*>?/gm, ' ');

  if (sender === 'bot') {
    msgEl.innerHTML = `
      <div class="chatbot-msg-avatar">🤖</div>
      <div class="msg-bubble">
        ${htmlContent}
        <div>
          <button type="button" class="msg-listen-btn" onclick="narrateText('${cleanSpeech.replace(/'/g, "\\'")}', this.parentElement.parentElement)">
            ${listenLabel}
          </button>
        </div>
      </div>
    `;
  } else {
    msgEl.innerHTML = `
      <div class="msg-bubble">${htmlContent}</div>
    `;
  }

  container.appendChild(msgEl);
  container.scrollTop = container.scrollHeight;
}

function generateAIResponse(query) {
  const q = query.toLowerCase();

  // 1. Check for specific Grievance ID
  if (q.includes('0842') || q.includes('dumka') && q.includes('water')) {
    if (currentLang === 'hi') {
      return {
        text: `<p><strong>शिकायत #AAPV-2026-0842 (दुमका - ग्रामीण जल शोधन):</strong></p>
               <p>यह परियोजना <strong>68% पूर्ण</strong> है और वर्तमान में <em>चरण 3: ज़मीनी प्रोटोटाइप परीक्षण</em> में है। <strong>बीआईटी मेसरा</strong> की टीम ने ग्राफीन-रेत आधारित सोलर फिल्टर तैयार किया है जो शिकारीपाड़ा के 8 चापाकलों का शुद्धिकरण करेगा।</p>
               <p>📌 <strong>आगामी मील का पत्थर:</strong> 25 सितंबर 2026 तक पानी की गुणवत्ता की अंतिम लैब रिपोर्ट और ग्राम पंचायत को सुपुर्दगी।</p>`,
        speechText: "शिकायत AAPV-2026-0842 दुमका जल शोधन परियोजना 68% पूर्ण है। बीआईटी मेसरा द्वारा फील्ड परीक्षण जारी है।"
      };
    } else if (currentLang === 'sat') {
      return {
        text: `<p><strong>ᱮᱴᱠᱮᱴᱚᱬᱮ #AAPV-2026-0842 (ᱫᱩᱢᱠᱟᱹ - ᱫᱟᱜ ᱥᱟᱯᱷᱟ):</strong></p>
               <p>ᱱᱚᱶᱟ ᱠᱟᱹᱢᱤ ᱫᱚ <strong>᱖᱘% ᱯᱩᱨᱟᱹᱣ</strong> ᱟᱠᱟᱱᱟ᱾ <strong>BIT Mesra</strong> ᱨᱤᱱ ᱤᱸᱡᱤᱱᱤᱭᱟᱨ ᱥᱳᱞᱟᱨ ᱯᱷᱤᱞᱴᱟᱨ ᱵᱮᱱᱟᱣ ᱠᱟᱛᱮ ᱥᱤᱠᱟᱨᱤᱯᱟᱲᱟ ᱨᱮ ᱴᱮᱥᱴ ᱮᱫᱟ ᱠᱚ᱾</p>`,
        speechText: "ᱮᱴᱠᱮᱴᱚᱬᱮ AAPV-2026-0842 ᱫᱩᱢᱠᱟᱹ ᱨᱮ ᱖᱘% ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱᱟ᱾ BIT Mesra ᱠᱟᱹᱢᱤ ᱠᱟᱱᱟᱭ᱾"
      };
    } else {
      return {
        text: `<p><strong>Grievance #AAPV-2026-0842 (Dumka - Rural Water Purification):</strong></p>
               <p>This project is currently <strong>68% complete</strong> at <em>Stage 3: Field Prototype Testing</em>. Lead institution <strong>BIT Mesra</strong> has successfully deployed a graphene-sand solar filtration prototype in Shikaripara.</p>
               <p>📌 <strong>Next Milestone:</strong> Water testing sign-off scheduled for 25th September 2026.</p>`,
        speechText: "Grievance AAPV-2026-0842 in Dumka is 68 percent complete by BIT Mesra and currently in field testing."
      };
    }
  }

  // 2. Completed projects query
  if (q.includes('complete') || q.includes('पूर्ण') || q.includes('ᱯᱩᱨᱟᱹᱣ')) {
    const completed = PROJECTS_DATA.filter(p => p.status === 'completed');
    if (currentLang === 'hi') {
      return {
        text: `<p>✅ <strong>झारखंड में पूर्ण एवं सत्यापित प्रमुख परियोजनाएं (कुल 126+):</strong></p>
               <ul>
                 <li><strong>धनबाद (IIT ISM):</strong> आर्सेनिक कुआं जल शोधन इकाई — 5,600 नागरिकों को स्वच्छ पेयजल।</li>
                 <li><strong>रांची ओरमांझी (BAU):</strong> सामुदायिक बायोगैस संयंत्र — 140 परिवारों को स्वच्छ ऊर्जा।</li>
                 <li><strong>पूर्वी सिंहभूम (कोल्हान वि.वि.):</strong> सौर कक्षा प्रकाश एवं डिजिटल शिक्षा — 8 स्कूलों में स्थापित।</li>
               </ul>
               <p>सभी समाधान ज़मीन पर 100% चालू और ग्राम पंचायतों द्वारा सत्यापित हैं।</p>`,
        speechText: "झारखंड में 126 से अधिक परियोजनाएं पूरी हो चुकी हैं। धनबाद, रांची और पूर्वी सिंहभूम में सफल समाधान स्थापित हैं।"
      };
    } else if (currentLang === 'sat') {
      return {
        text: `<p>✅ <strong>ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱ ᱢᱩᱬᱩᱛ ᱠᱟᱹᱢᱤ ᱠᱚ:</strong></p>
               <ul>
                 <li><strong>ᱫᱷᱟᱱᱵᱟᱫᱽ (IIT ISM):</strong> ᱟᱨᱥᱮᱱᱤᱠ ᱫᱟᱜ ᱥᱟᱯᱷᱟ ᱠᱟᱹᱢᱤ — ᱕,᱖᱐᱐ ᱦᱚᱲ ᱥᱟᱯᱷᱟ ᱫᱟᱜ ᱧᱟᱢᱮᱫᱟ᱾</li>
                 <li><strong>ᱨᱟᱺᱪᱤ (BAU):</strong> ᱟᱹᱛᱩ ᱵᱟᱭᱳᱜᱮᱥ ᱯᱞᱟᱱᱴ — ᱑᱔᱐ ᱜᱷᱟᱨᱚᱸᱡᱽ ᱞᱟᱵᱷ ᱧᱟᱢ᱾</li>
                 <li><strong>ᱥᱟᱢᱟᱝ ᱥᱤᱝᱵᱷᱩᱢ:</strong> ᱘ ᱜᱚᱴᱟᱝ ᱟᱥᱲᱟ ᱨᱮ ᱥᱳᱞᱟᱨ ᱵᱟᱹᱛᱤ ᱟᱨ ᱯᱟᱲᱦᱟᱣ᱾</li>
               </ul>`,
        speechText: "ᱫᱷᱟᱱᱵᱟᱫᱽ, ᱨᱟᱺᱪᱤ ᱟᱨ ᱥᱟᱢᱟᱝ ᱥᱤᱝᱵᱷᱩᱢ ᱨᱮ ᱠᱟᱹᱢᱤ ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱᱟ᱾"
      };
    } else {
      return {
        text: `<p>✅ <strong>Top Completed & Verified Field Solutions (126+ statewide):</strong></p>
               <ul>
                 <li><strong>Dhanbad (IIT ISM):</strong> Arsenic & Iron Well Filtration Unit — serving 5,600 residents daily.</li>
                 <li><strong>Ranchi (BAU Ranchi):</strong> Community Biogas & Clean Energy Unit — powering 140 households in Ormanjhi.</li>
                 <li><strong>East Singhbhum (Kolhan Univ):</strong> Solar Classroom Infrastructure deployed in 8 tribal schools.</li>
               </ul>
               <p>All completed projects are certified functional by local Panchayati Raj institutions.</p>`,
        speechText: "Over 126 projects have been completed across Jharkhand, including major water and clean energy projects in Dhanbad and Ranchi."
      };
    }
  }

  // 3. Ongoing projects query
  if (q.includes('ongoing') || q.includes('चल रही') || q.includes('progress') || q.includes('ᱪᱟᱹᱞᱩ')) {
    if (currentLang === 'hi') {
      return {
        text: `<p>⚙️ <strong>वर्तमान में 428 सक्रिय विश्वविद्यालय प्रोटोटाइप कार्य चल रहे हैं:</strong></p>
               <ul>
                 <li><strong>दुमका (68%):</strong> बीआईटी मेसरा द्वारा ग्रामीण जल शोधन संयंत्र।</li>
                 <li><strong>हजारीबाग (45%):</strong> वीबीयू द्वारा स्मार्ट आईओटी मृदा नमी सेंसर और ड्रिप सिंचाई।</li>
                 <li><strong>गिरिडीह (78%):</strong> एनआईटी जमशेदपुर द्वारा महिला स्वयं सहायता समूहों हेतु सौर कोल्ड स्टोरेज।</li>
               </ul>
               <p>आप ऊपर दिए गए 'Ongoing Projects' टैब पर क्लिक करके प्रत्येक की लाइव प्रगति देख सकते हैं।</p>`,
        speechText: "वर्तमान में 428 सक्रिय परियोजनाएं चल रही हैं। दुमका में जल शोधन और गिरिडीह में कोल्ड स्टोरेज पर काम जारी है।"
      };
    } else {
      return {
        text: `<p>⚙️ <strong>Currently 428 active university prototypes are in progress:</strong></p>
               <ul>
                 <li><strong>Dumka (68%):</strong> Rural Water Purification by BIT Mesra.</li>
                 <li><strong>Hazaribagh (45%):</strong> IoT Smart Soil Moisture & Drip Irrigation by VBU.</li>
                 <li><strong>Giridih (78%):</strong> Solar Cold Storage for SHG produce by NIT Jamshedpur.</li>
               </ul>
               <p>Select the <em>'Ongoing Projects'</em> tab above to view milestone timelines and team details.</p>`,
        speechText: "There are 428 active university prototypes across Jharkhand, including water purification in Dumka and solar cold storage in Giridih."
      };
    }
  }

  // 4. Available for adoption query
  if (q.includes('available') || q.includes('adoption') || q.includes('उपलब्ध') || q.includes('ᱦᱟᱛᱟᱣ')) {
    if (currentLang === 'hi') {
      return {
        text: `<p>📋 <strong>विश्वविद्यालयों और उद्योग जगत द्वारा गोद लेने हेतु उपलब्ध प्रमुख समस्याएं:</strong></p>
               <ul>
                 <li><strong>सिमडेगा (#AAPV-2026-1188):</strong> भारी बारिश में नदी पार करने हेतु बांस-स्टील झूला पुल।</li>
                 <li><strong>खूंटी (#AAPV-2026-1205):</strong> पहाड़ी जलस्रोत से गुरुत्वाकर्षण आधारित पाइपलाइन।</li>
               </ul>
               <p>कॉलेज और फैकल्टी मेंटर्स 'University' पोर्टल से सीधे इन चुनौतियों को स्वीकार कर सकते हैं।</p>`,
        speechText: "सिमडेगा में झूला पुल और खूंटी में गुरुत्वाकर्षण पाइपलाइन जैसी समस्याएं विश्वविद्यालयों के लिए उपलब्ध हैं।"
      };
    } else {
      return {
        text: `<p>📋 <strong>Top Community Challenges Available for Adoption:</strong></p>
               <ul>
                 <li><strong>Simdega (#AAPV-2026-1188):</strong> Suspended Bamboo-Steel Footbridge for monsoon school connectivity.</li>
                 <li><strong>Khunti (#AAPV-2026-1205):</strong> Natural Gravity-Fed Spring Water Piping System for hillside settlement.</li>
               </ul>
               <p>Faculty mentors and student teams can adopt these challenges directly from the University portal.</p>`,
        speechText: "Community challenges in Simdega and Khunti are currently verified and open for engineering teams to adopt."
      };
    }
  }

  // General Fallback
  if (currentLang === 'hi') {
    return {
      text: `<p>AapV पोर्टल पर आपकी खोज: "<em>${query}</em>"</p>
             <p>झारखंड राज्य में कुल <strong>2,481 शिकायतें दर्ज</strong> हुई हैं, जिनमें से <strong>428 सक्रिय अनुसंधान परियोजनाएं</strong> हैं और <strong>126 परियोजनाएं सफलतापूर्वक पूर्ण</strong> हो चुकी हैं। आप ऊपर दिए गए फिल्टर द्वारा ज़िले या क्षेत्र के आधार पर विवरण देख सकते हैं।</p>`,
      speechText: `आपकी खोज के अनुसार, झारखंड में 428 सक्रिय परियोजनाएं और 126 पूर्ण समाधान उपलब्ध हैं।`
    };
  } else if (currentLang === 'sat') {
    return {
      text: `<p>AapV ᱨᱮ ᱟᱢᱟᱜ ᱠᱩᱠᱞᱤ: "<em>${query}</em>"</p>
             <p>ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮ <strong>᱒,᱔᱘᱑ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱫᱟᱠᱷᱚᱞ</strong> ᱟᱠᱟᱱᱟ, <strong>᱔᱒᱘ ᱪᱟᱹᱞᱩ ᱠᱟᱹᱢᱤ</strong> ᱟᱨ <strong>᱑᱒᱖ ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱᱟ</strong>᱾ ᱪᱮᱛᱟᱱ ᱨᱮ ᱴᱨᱟᱠᱟᱨ ᱧᱮᱞ ᱢᱮ᱾</p>`,
      speechText: "ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮ ᱔᱒᱘ ᱪᱟᱹᱞᱩ ᱠᱟᱹᱢᱤ ᱟᱨ ᱑᱒᱖ ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱ ᱠᱟᱹᱢᱤ ᱢᱮᱱᱟᱜ-ᱟ᱾"
    };
  } else {
    return {
      text: `<p>Regarding your query: "<em>${query}</em>"</p>
             <p>AapV has recorded <strong>2,481 citizen grievances</strong> across Jharkhand, resulting in <strong>428 active university prototypes</strong> and <strong>126 verified field completions</strong>. Use the filters above to inspect specific districts or domains.</p>`,
      speechText: `According to live records, AapV has 428 active university projects and 126 completed solutions in Jharkhand.`
    };
  }
}

// ==========================================================================
// AUDIO RECORDING & SPEECH-TO-TEXT ENGINE (100% SARVAM AI API)
// Exclusively uses Sarvam AI (saaras:v3) for Santhali, Hindi, and English
// ==========================================================================

let activeAudioRecorder = null;
window._activeSarvamProcessor = null;

function writeWavString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

function encodeWavPcm16(samples, sampleRate = 16000) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  // RIFF identifier
  writeWavString(view, 0, 'RIFF');
  // file length
  view.setUint32(4, 36 + samples.length * 2, true);
  // RIFF type & format
  writeWavString(view, 8, 'WAVE');
  writeWavString(view, 12, 'fmt ');
  // format chunk length
  view.setUint32(16, 16, true);
  // sample format (raw PCM = 1)
  view.setUint16(20, 1, true);
  // channel count (mono = 1)
  view.setUint16(22, 1, true);
  // sample rate
  view.setUint32(24, sampleRate, true);
  // byte rate (sample rate * block align)
  view.setUint32(28, sampleRate * 2, true);
  // block align (channel count * bytes per sample)
  view.setUint16(32, 2, true);
  // bits per sample
  view.setUint16(34, 16, true);
  // data chunk identifier
  writeWavString(view, 36, 'data');
  // data chunk length
  view.setUint32(40, samples.length * 2, true);

  // Write 16-bit PCM samples with clipping
  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }

  return new Blob([view], { type: 'audio/wav' });
}

function downsampleBuffer(buffer, inputSampleRate, outputSampleRate = 16000) {
  if (inputSampleRate === outputSampleRate) return buffer;
  const ratio = inputSampleRate / outputSampleRate;
  const newLength = Math.round(buffer.length / ratio);
  const result = new Float32Array(newLength);
  let offsetResult = 0;
  let offsetBuffer = 0;
  while (offsetResult < result.length) {
    const nextOffsetBuffer = Math.round((offsetResult + 1) * ratio);
    let accum = 0, count = 0;
    for (let i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
      accum += buffer[i];
      count++;
    }
    result[offsetResult] = count > 0 ? accum / count : 0;
    offsetResult++;
    offsetBuffer = nextOffsetBuffer;
  }
  return result;
}

async function transcribeWithSarvamAI(wavBlob, languageCode = 'en-IN') {
  const config = window.AAPV_CONFIG || {};
  const apiKey = config.SARVAM_API_KEY || 'sk_7pgza6vm_Ip4rPX93iJhmopcbtrkEi3xi';
  const endpoint = config.SARVAM_ENDPOINT || 'https://api.sarvam.ai/speech-to-text';
  const model = config.SARVAM_MODEL || 'saaras:v3';
  const mode = config.SARVAM_MODE || 'transcribe';

  const formData = new FormData();
  formData.append('file', wavBlob, 'recording.wav');
  formData.append('model', model);
  formData.append('mode', mode);
  if (languageCode) {
    formData.append('language_code', languageCode);
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'api-subscription-key': apiKey
    },
    body: formData
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error('Sarvam AI STT error:', response.status, errText);
    throw new Error(`Sarvam STT failed: ${response.status}`);
  }

  const data = await response.json();
  return (data.transcript || '').trim();
}

/**
 * Universal Speech Recognition Controller (100% Sarvam AI API):
 * Directly records microphone audio, downsamples to 16kHz WAV,
 * and transcribes using Sarvam AI saaras:v3 model.
 * Fully supports Santhali ('sat-IN'), Hindi ('hi-IN'), and English ('en-IN').
 */
function startSarvamVoiceRecognition({
  triggerBtn,
  statusEl,
  onResult,
  onError,
  maxDurationSeconds = 10
}) {
  const dict = translations[currentLang] || translations.en;

  // If already recording with the same button, user clicked to finish & transcribe now
  if (activeAudioRecorder && activeAudioRecorder.triggerBtn === triggerBtn) {
    activeAudioRecorder.stop();
    return;
  }
  if (activeAudioRecorder) {
    activeAudioRecorder.cancel();
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    toast(dict.voice_not_supported || 'Microphone access is not supported or requires HTTPS/localhost in this browser.');
    return;
  }

  // Map active portal language to Sarvam AI language codes
  const langCodeMap = {
    'sat': 'sat-IN',
    'hi': 'hi-IN',
    'en': 'en-IN'
  };
  const targetLangCode = langCodeMap[currentLang] || 'en-IN';

  let isStopping = false;
  let audioContext = null;
  let mediaStream = null;
  let scriptProcessor = null;
  let inputSource = null;
  let silenceGain = null;
  let audioChunks = [];
  let timeoutId = null;

  const stopRecording = async () => {
    if (isStopping) return;
    isStopping = true;
    if (timeoutId) clearTimeout(timeoutId);

    if (triggerBtn) {
      triggerBtn.classList.remove('recording', 'listening');
      triggerBtn.classList.add('processing');
    }
    if (statusEl) {
      statusEl.textContent = dict.voice_status_processing || 'Transcribing audio with Sarvam AI…';
    }
    toast(dict.voice_status_processing || 'Transcribing audio with Sarvam AI…');

    try {
      if (scriptProcessor) scriptProcessor.disconnect();
      if (silenceGain) silenceGain.disconnect();
      if (inputSource) inputSource.disconnect();
      window._activeSarvamProcessor = null;

      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }

      // Flatten Float32 samples
      let totalLength = audioChunks.reduce((acc, chunk) => acc + chunk.length, 0);
      if (totalLength === 0) {
        throw new Error('No audio data captured');
      }

      let mergedSamples = new Float32Array(totalLength);
      let offset = 0;
      for (let chunk of audioChunks) {
        mergedSamples.set(chunk, offset);
        offset += chunk.length;
      }

      const inputSampleRate = audioContext ? audioContext.sampleRate : 16000;
      if (audioContext && audioContext.state !== 'closed') {
        await audioContext.close();
      }

      // Downsample to 16kHz standard for Sarvam
      const downsampled = downsampleBuffer(mergedSamples, inputSampleRate, 16000);
      const wavBlob = encodeWavPcm16(downsampled, 16000);

      const transcript = await transcribeWithSarvamAI(wavBlob, targetLangCode);

      if (triggerBtn) triggerBtn.classList.remove('processing', 'recording', 'listening');
      activeAudioRecorder = null;

      if (transcript) {
        if (statusEl) statusEl.textContent = dict.voice_status_captured || 'Voice captured ✓';
        toast(dict.voice_status_captured || 'Voice captured ✓');
        if (onResult) onResult(transcript);
      } else {
        if (statusEl) statusEl.textContent = dict.voice_status_error || 'Could not capture voice';
        toast(dict.voice_status_error || 'No speech detected, please speak clearly');
      }
    } catch (err) {
      console.error('Sarvam AI transcription error:', err);
      if (triggerBtn) triggerBtn.classList.remove('processing', 'recording', 'listening');
      activeAudioRecorder = null;
      if (statusEl) statusEl.textContent = dict.voice_status_error || 'Could not capture voice';
      toast(dict.voice_status_error || 'Could not capture voice');
      if (onError) onError(err);
    } finally {
      setTimeout(() => {
        if (statusEl && statusEl.textContent !== dict.voice_status_listening) {
          statusEl.textContent = dict.voice_status_ready || 'Speak (Hindi, Santhali, English)';
        }
      }, 3500);
    }
  };

  const cancelRecording = () => {
    isStopping = true;
    if (timeoutId) clearTimeout(timeoutId);
    if (scriptProcessor) scriptProcessor.disconnect();
    if (silenceGain) silenceGain.disconnect();
    if (inputSource) inputSource.disconnect();
    window._activeSarvamProcessor = null;
    if (mediaStream) mediaStream.getTracks().forEach(track => track.stop());
    if (audioContext && audioContext.state !== 'closed') audioContext.close();
    if (triggerBtn) triggerBtn.classList.remove('recording', 'listening', 'processing');
    activeAudioRecorder = null;
  };

  navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true
    }
  })
  .then(async (stream) => {
    mediaStream = stream;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContextClass();
    if (audioContext.state === 'suspended') {
      await audioContext.resume();
    }

    inputSource = audioContext.createMediaStreamSource(stream);
    scriptProcessor = audioContext.createScriptProcessor(4096, 1, 1);
    // Prevent garbage collection in V8
    window._activeSarvamProcessor = scriptProcessor;

    scriptProcessor.onaudioprocess = (e) => {
      if (isStopping) return;
      const inputData = e.inputBuffer.getChannelData(0);
      const copy = new Float32Array(inputData.length);
      copy.set(inputData);
      audioChunks.push(copy);
    };

    // Route through zero-gain node to prevent microphone feedback loop into user speakers
    silenceGain = audioContext.createGain();
    silenceGain.gain.value = 0;

    inputSource.connect(scriptProcessor);
    scriptProcessor.connect(silenceGain);
    silenceGain.connect(audioContext.destination);

    if (triggerBtn) {
      triggerBtn.classList.remove('processing');
      triggerBtn.classList.add('recording', 'listening');
    }
    if (statusEl) {
      statusEl.textContent = dict.voice_status_listening || 'Listening… speak naturally (click to finish)';
    }
    toast(dict.voice_status_listening || 'Listening… speak naturally (click to finish)');

    activeAudioRecorder = {
      triggerBtn,
      stop: stopRecording,
      cancel: cancelRecording
    };

    // Auto-stop after maxDurationSeconds
    timeoutId = setTimeout(() => {
      if (!isStopping) {
        stopRecording();
      }
    }, maxDurationSeconds * 1000);
  })
  .catch(err => {
    console.error('Microphone access denied:', err);
    if (triggerBtn) triggerBtn.classList.remove('recording', 'listening', 'processing');
    if (statusEl) statusEl.textContent = dict.voice_status_error || 'Could not capture voice';
    toast('Microphone permission required. Please allow microphone access.');
    if (onError) onError(err);
  });
}

// Backward compatibility alias
const startHybridSpeechRecognition = startSarvamVoiceRecognition;

// 1. Citizen Grievance Form (index.html)
function handleGrievanceVoiceInput() {
  const voiceBtn = document.getElementById('voiceBtn');
  const voiceStatus = document.getElementById('voiceStatus');
  const problemInput = document.getElementById('problem');

  startSarvamVoiceRecognition({
    triggerBtn: voiceBtn,
    statusEl: voiceStatus,
    onResult: (transcript) => {
      if (problemInput) {
        const existing = problemInput.value.trim();
        problemInput.value = existing ? `${existing} ${transcript}` : transcript;
        problemInput.dispatchEvent(new Event('input', { bubbles: true }));
        problemInput.focus();
      }
    }
  });
}

// 2. Main AI Chatbot (impact.html)
function handleChatbotSpeechInput() {
  const micBtn = document.getElementById('chatMicBtn');
  const inputEl = document.getElementById('chatInput');

  startSarvamVoiceRecognition({
    triggerBtn: micBtn,
    statusEl: null,
    onResult: (transcript) => {
      if (inputEl) inputEl.value = transcript;
      sendChatMessage(transcript);
    }
  });
}

// ==========================================================================
// FLOATING "ASK AI ASSISTANT" (Track & Impact Site)
// ==========================================================================
function toggleFloatingAiAssistant() {
  const widget = document.getElementById('floatingAiWidget');
  if (!widget) return;
  if (widget.style.display === 'none' || !widget.classList.contains('active')) {
    openFloatingAiAssistant();
  } else {
    closeFloatingAiAssistant();
  }
}

function openFloatingAiAssistant() {
  const widget = document.getElementById('floatingAiWidget');
  const btn = document.getElementById('floatingAiBtn');
  if (!widget) return;

  widget.style.display = 'flex';
  setTimeout(() => {
    widget.classList.add('active');
  }, 10);

  if (btn) {
    btn.setAttribute('aria-expanded', 'true');
    btn.classList.add('widget-open');
  }

  const inputEl = document.getElementById('floatingChatInput');
  if (inputEl) {
    setTimeout(() => inputEl.focus(), 150);
  }

  const messagesContainer = document.getElementById('floatingChatMessages');
  if (messagesContainer) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

function closeFloatingAiAssistant() {
  const widget = document.getElementById('floatingAiWidget');
  const btn = document.getElementById('floatingAiBtn');
  if (!widget) return;

  widget.classList.remove('active');
  setTimeout(() => {
    if (!widget.classList.contains('active')) {
      widget.style.display = 'none';
    }
  }, 220);

  if (btn) {
    btn.setAttribute('aria-expanded', 'false');
    btn.classList.remove('widget-open');
  }
}

function jumpToFullChatbot() {
  closeFloatingAiAssistant();
  const section = document.getElementById('chatbotSection');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    const card = section.querySelector('.chatbot-card');
    if (card) {
      card.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
      card.style.boxShadow = '0 0 0 4px #3b82f6, 0 20px 40px rgba(59,130,246,0.3)';
      card.style.transform = 'scale(1.01)';
      setTimeout(() => {
        card.style.boxShadow = '';
        card.style.transform = '';
      }, 1400);
    }
    const input = document.getElementById('chatInput');
    if (input) setTimeout(() => input.focus(), 600);
  }
}

function sendFloatingChatMessage(textOverride = null) {
  const inputEl = document.getElementById('floatingChatInput');
  const query = (textOverride !== null ? textOverride : (inputEl ? inputEl.value : '')).trim();
  if (!query) return;

  if (inputEl) inputEl.value = '';

  appendFloatingChatMessage('user', query);

  const messagesContainer = document.getElementById('floatingChatMessages');
  if (messagesContainer) {
    const typingId = 'floating-typing-' + Date.now();
    const typingEl = document.createElement('div');
    typingEl.className = 'chat-msg bot';
    typingEl.id = typingId;
    typingEl.innerHTML = `
      <div class="chatbot-msg-avatar">🤖</div>
      <div class="msg-bubble" style="color:var(--muted); font-style:italic;">
        ${currentLang === 'hi' ? 'विश्लेषण कर रहे हैं…' : (currentLang === 'sat' ? 'ᱵᱤᱪᱟᱹᱨᱮᱫᱟ…' : 'Analyzing progress data…')}
      </div>
    `;
    messagesContainer.appendChild(typingEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
      const el = document.getElementById(typingId);
      if (el) el.remove();
      const response = generateAIResponse(query);
      appendFloatingChatMessage('bot', response.text, response.speechText);
    }, 600);
  }
}

function appendFloatingChatMessage(sender, htmlContent, speechText = null) {
  const container = document.getElementById('floatingChatMessages');
  if (!container) return;

  const msgEl = document.createElement('div');
  msgEl.className = `chat-msg ${sender}`;

  const dict = translations[currentLang] || translations.en;
  const listenLabel = dict.voice_narrate_btn || '🔊 Listen';
  const cleanSpeech = (speechText || htmlContent).replace(/<[^>]*>?/gm, ' ');

  if (sender === 'bot') {
    msgEl.innerHTML = `
      <div class="chatbot-msg-avatar">🤖</div>
      <div class="msg-bubble">
        ${htmlContent}
        <div>
          <button type="button" class="msg-listen-btn" onclick="narrateText('${cleanSpeech.replace(/'/g, "\\'")}', this.parentElement.parentElement)">
            ${listenLabel}
          </button>
        </div>
      </div>
    `;
  } else {
    msgEl.innerHTML = `
      <div class="msg-bubble">${htmlContent}</div>
    `;
  }

  container.appendChild(msgEl);
  container.scrollTop = container.scrollHeight;
}

function handleFloatingChatbotSpeechInput() {
  const micBtn = document.getElementById('floatingMicBtn');
  const inputEl = document.getElementById('floatingChatInput');

  startSarvamVoiceRecognition({
    triggerBtn: micBtn,
    statusEl: null,
    onResult: (transcript) => {
      if (inputEl) inputEl.value = transcript;
      sendFloatingChatMessage(transcript);
    }
  });
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
function initApp() {
  initTheme();
  initLanguageDropdown();
  setLanguage(currentLang);
  updateAuthUI();
  updateUnivAuthUI();
  updateIndAuthUI();
  updateAdminAuthUI();

  // Attach grievance voice button listener if present
  const voiceBtn = document.getElementById('voiceBtn');
  if (voiceBtn) {
    voiceBtn.addEventListener('click', handleGrievanceVoiceInput);
  }

  // If on tracking page, initialize projects & chatbot
  if (document.getElementById('projectsGrid')) {
    renderProjects();

    const searchInput = document.getElementById('trackingSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', renderProjects);
    }

    const distSelect = document.getElementById('trackingDistrictFilter');
    if (distSelect) {
      distSelect.addEventListener('change', renderProjects);
    }

    const domSelect = document.getElementById('trackingDomainFilter');
    if (domSelect) {
      domSelect.addEventListener('change', renderProjects);
    }

    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          sendChatMessage();
        }
      });
    }

    // Floating AI Assistant document listeners
    document.addEventListener('click', (e) => {
      const container = document.getElementById('floatingAiContainer');
      const widget = document.getElementById('floatingAiWidget');
      if (widget && widget.classList.contains('active')) {
        if (container && !container.contains(e.target)) {
          closeFloatingAiAssistant();
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeFloatingAiAssistant();
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}