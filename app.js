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
    voice_status_listening: "Listening… speak naturally",
    voice_status_captured: "Voice captured ✓",
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
    mobile_menu_title: "All Portals"
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
    voice_status_listening: "सुन रहे हैं… स्वाभाविक रूप से बोलें",
    voice_status_captured: "आवाज़ दर्ज हो गई ✓",
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
    mobile_menu_title: "सभी पोर्टल"
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
    voice_status_listening: "ᱟᱸᱡᱚᱢᱮᱫᱟ… ᱥᱟᱦᱟᱡᱽ ᱛᱮ ᱨᱚᱲ ᱢᱮ",
    voice_status_captured: "ᱟᱲᱟᱝ ᱨᱮᱠᱳᱨᱰ ᱮᱱᱟ ✓",
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
    mobile_menu_title: "ᱥᱟᱱᱟᱢ ᱯᱚᱨᱴᱟᱞ"
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
  }
});

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

// Voice input via Web Speech API (with AI voice-to-text indicator)
const voiceBtn = document.getElementById('voiceBtn');
if (voiceBtn) {
  voiceBtn.onclick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast('voice_not_supported');
      return;
    }
    const dict = translations[currentLang] || translations.en;
    const r = new SpeechRecognition();
    r.lang = dict.speechLang || 'en-IN';
    r.interimResults = false;
    const statusEl = document.getElementById('voiceStatus');

    r.onstart = () => {
      if (statusEl) statusEl.textContent = dict.voice_status_listening;
      voiceBtn.classList.add('recording');
    };

    r.onresult = (e) => {
      const probInput = document.getElementById('problem');
      if (probInput) {
        const transcript = e.results[0][0].transcript;
        probInput.value = probInput.value ? probInput.value + ' ' + transcript : transcript;
      }
      if (statusEl) statusEl.textContent = dict.voice_status_captured;
      voiceBtn.classList.remove('recording');
    };

    r.onerror = () => {
      if (statusEl) statusEl.textContent = dict.voice_status_error;
      voiceBtn.classList.remove('recording');
    };

    r.onend = () => {
      voiceBtn.classList.remove('recording');
    };

    r.start();
  };
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
// VOICE-ENABLED NARRATION & ACCESSIBILITY ENGINE (Showcase Mode - Simulation Only)
// Per instruction: Visual showcase mode matching provided material, no actual audio synthesis
// ==========================================================================
let showcaseAudioTimer = null;
let isShowcasePlaying = false;
let showcaseActiveBtn = null;
let showcaseActiveEl = null;
let isTapToHearActive = false;

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
    stopSpeaking(true);
    return;
  }

  stopSpeaking(true);

  if (!target) return;

  isShowcasePlaying = true;
  showcaseActiveBtn = btn;
  showcaseActiveEl = target;

  target.classList.add('speaking-highlight');
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (btn) {
    btn.classList.add('speaking');
    const labelSpan = btn.querySelector('.narrate-label');
    if (labelSpan) {
      if (!labelSpan.hasAttribute('data-original-text')) {
        labelSpan.setAttribute('data-original-text', labelSpan.textContent);
      }
      labelSpan.textContent = translations[currentLang]?.narrate_btn_speaking || 'Stop ⏹';
    }
  }

  const stopAudioBtn = document.getElementById('stopAudioBtn');
  if (stopAudioBtn) {
    stopAudioBtn.style.display = 'none';
  }

  const dict = translations[currentLang] || translations.en;
  toast(dict.toast_audio_showcase || 'Voice Narration & Audio Guide (Showcase Mode)');

  showcaseAudioTimer = setTimeout(() => {
    stopSpeaking(true);
  }, 2500);
}

function narrateText(text, targetEl, callback) {
  if (isShowcasePlaying && showcaseActiveEl === targetEl) {
    stopSpeaking(true);
    if (callback) callback();
    return;
  }

  stopSpeaking(true);

  isShowcasePlaying = true;
  showcaseActiveEl = targetEl;

  if (targetEl) {
    targetEl.classList.add('speaking-highlight');
    if (typeof targetEl.scrollIntoView === 'function') {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  const stopAudioBtn = document.getElementById('stopAudioBtn');
  if (stopAudioBtn) {
    stopAudioBtn.style.display = 'none';
  }

  const dict = translations[currentLang] || translations.en;
  toast(dict.toast_audio_showcase || 'Voice Narration & Audio Guide (Showcase Mode)');

  showcaseAudioTimer = setTimeout(() => {
    stopSpeaking(true);
    if (callback) callback();
  }, 2500);
}

function toggleReadEntirePage() {
  if (isShowcasePlaying) {
    stopSpeaking();
    return;
  }

  stopSpeaking(true);

  const targets = Array.from(document.querySelectorAll(
    '#heroCopyBlock, .hero-copy, #citizenPortalCard, .dashboard, #howSection, .how-grid, #impactHeroBlock, #contactSection, .contact-section'
  )).filter(el => el.offsetParent !== null);

  if (!targets.length) {
    toast(translations[currentLang]?.toast_audio_showcase || 'Voice Narration & Audio Guide (Showcase Mode)');
    return;
  }

  isShowcasePlaying = true;

  const readPageBtn = document.getElementById('readPageBtn');
  const readPageBtnIcon = document.getElementById('readPageBtnIcon') || readPageBtn?.querySelector('.audio-play-icon');
  const readPageBtnLabel = document.getElementById('readPageBtnLabel');
  const stopAudioBtn = document.getElementById('stopAudioBtn');

  if (readPageBtn) readPageBtn.classList.add('speaking');
  if (readPageBtnIcon) readPageBtnIcon.textContent = '⏹';
  if (readPageBtnLabel) {
    const dict = translations[currentLang] || translations.en;
    readPageBtnLabel.textContent = dict.btn_stop_audio || 'Stop Reading';
  }
  if (stopAudioBtn) stopAudioBtn.style.display = 'none';

  toast(translations[currentLang]?.toast_audio_showcase || 'Voice Narration (Showcase Mode) — Reading Page');

  let step = 0;
  function highlightNext() {
    if (!isShowcasePlaying || step >= Math.min(targets.length, 3)) {
      stopSpeaking(true);
      return;
    }
    document.querySelectorAll('.speaking-highlight').forEach(el => el.classList.remove('speaking-highlight'));
    const cur = targets[step];
    cur.classList.add('speaking-highlight');
    cur.scrollIntoView({ behavior: 'smooth', block: 'center' });
    step++;
    showcaseAudioTimer = setTimeout(highlightNext, 1200);
  }

  highlightNext();
}

function stopSpeaking(silent = false) {
  if (showcaseAudioTimer) {
    clearTimeout(showcaseAudioTimer);
    showcaseAudioTimer = null;
  }
  isShowcasePlaying = false;

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

function handleChatbotSpeechInput() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    toast('Voice input is not supported in this browser.');
    return;
  }

  const micBtn = document.getElementById('chatMicBtn');
  const dict = translations[currentLang] || translations.en;

  const recognition = new SpeechRecognition();
  recognition.lang = dict.speechLang || 'en-IN';
  recognition.interimResults = false;

  recognition.onstart = () => {
    if (micBtn) micBtn.classList.add('listening');
    toast(dict.voice_status_listening || 'Listening… speak naturally');
  };

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    const inputEl = document.getElementById('chatInput');
    if (inputEl) inputEl.value = transcript;
    if (micBtn) micBtn.classList.remove('listening');
    sendChatMessage(transcript);
  };

  recognition.onerror = () => {
    if (micBtn) micBtn.classList.remove('listening');
    toast(dict.voice_status_error || 'Could not capture voice');
  };

  recognition.onend = () => {
    if (micBtn) micBtn.classList.remove('listening');
  };

  recognition.start();
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
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}