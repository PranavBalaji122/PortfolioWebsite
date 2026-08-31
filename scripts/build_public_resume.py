from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Pranav-Balaji-Resume.pdf"

INK = colors.HexColor("#15171B")
MUTED = colors.HexColor("#50545C")
ACCENT = colors.HexColor("#405EB4")
RULE = colors.HexColor("#C9CDD5")


def register_fonts() -> tuple[str, str, str]:
    font_root = Path(
        "/Users/pranavbalaji/.cache/codex-runtimes/codex-primary-runtime/"
        "dependencies/native/libreoffice-headless/libreoffice/LibreOfficeDev.app/"
        "Contents/Resources/fonts/truetype"
    )
    regular = font_root / "DejaVuSans.ttf"
    bold = font_root / "DejaVuSans-Bold.ttf"
    serif = font_root / "DejaVuSerif.ttf"
    if regular.exists() and bold.exists() and serif.exists():
        pdfmetrics.registerFont(TTFont("ResumeSans", regular))
        pdfmetrics.registerFont(TTFont("ResumeSansBold", bold))
        pdfmetrics.registerFont(TTFont("ResumeSerif", serif))
        return "ResumeSans", "ResumeSansBold", "ResumeSerif"
    return "Helvetica", "Helvetica-Bold", "Times-Roman"


SANS, SANS_BOLD, SERIF = register_fonts()
styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName=SERIF,
    fontSize=24,
    leading=26,
    textColor=INK,
    alignment=TA_CENTER,
    spaceAfter=4,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName=SANS,
    fontSize=8.1,
    leading=10.5,
    textColor=MUTED,
    alignment=TA_CENTER,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Normal"],
    fontName=SANS_BOLD,
    fontSize=9.8,
    leading=12,
    textColor=ACCENT,
    uppercase=True,
    tracking=0.8,
)
role_style = ParagraphStyle(
    "Role",
    parent=styles["Normal"],
    fontName=SANS_BOLD,
    fontSize=9.1,
    leading=11,
    textColor=INK,
)
meta_style = ParagraphStyle(
    "Meta",
    parent=styles["Normal"],
    fontName=SANS,
    fontSize=8.35,
    leading=10.2,
    textColor=MUTED,
)
right_style = ParagraphStyle(
    "RightMeta",
    parent=meta_style,
    alignment=TA_RIGHT,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName=SANS,
    fontSize=8.25,
    leading=10.8,
    textColor=INK,
    alignment=TA_LEFT,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=11,
    firstLineIndent=-6,
    bulletIndent=0,
    spaceAfter=1.8,
)


def section(title: str):
    return KeepTogether(
        [
            Spacer(1, 6),
            Paragraph(title.upper(), section_style),
            Spacer(1, 1.5),
            HRFlowable(width="100%", thickness=0.55, color=RULE, spaceAfter=4),
        ]
    )


def heading(primary: str, secondary: str, date: str, location: str):
    left = Paragraph(f"{primary}<br/><font name='{SANS}' color='#50545C'>{secondary}</font>", role_style)
    right = Paragraph(f"{date}<br/><font color='#50545C'>{location}</font>", right_style)
    table = Table([[left, right]], colWidths=[4.65 * inch, 2.2 * inch])
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
            ]
        )
    )
    return table


def bullets(items: list[str]):
    return [Paragraph(item, bullet_style, bulletText="-") for item in items]


def block(primary: str, secondary: str, date: str, location: str, items: list[str]):
    return KeepTogether([heading(primary, secondary, date, location), *bullets(items), Spacer(1, 2.5)])


def page_number(canvas, document):
    canvas.saveState()
    canvas.setTitle("Pranav Balaji Resume")
    canvas.setAuthor("Pranav Balaji")
    canvas.setSubject("Software Engineering and Applied AI")
    canvas.setFont(SANS, 6.5)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(letter[0] - document.rightMargin, 17, f"pranavbalaji.org  /  {document.page}")
    canvas.restoreState()


def build_resume():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    document = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        rightMargin=0.42 * inch,
        leftMargin=0.42 * inch,
        topMargin=0.40 * inch,
        bottomMargin=0.34 * inch,
        title="Pranav Balaji Resume",
        author="Pranav Balaji",
        subject="Software Engineering and Applied AI",
    )

    story = [
        Paragraph("Pranav Balaji", name_style),
        Paragraph(
            "<link href='mailto:pranavbalaji9276@gmail.com' color='#405EB4'>pranavbalaji9276@gmail.com</link>"
            " &nbsp;|&nbsp; "
            "<link href='https://www.linkedin.com/in/pranav-balaji1321' color='#405EB4'>linkedin.com/in/pranav-balaji1321</link>"
            " &nbsp;|&nbsp; "
            "<link href='https://github.com/PranavBalaji122' color='#405EB4'>github.com/PranavBalaji122</link>"
            " &nbsp;|&nbsp; "
            "<link href='https://www.pranavbalaji.org' color='#405EB4'>pranavbalaji.org</link>",
            contact_style,
        ),
        section("Education"),
        heading(
            "Purdue University",
            "BS Computer Engineering, Minors: Math &amp; Finance",
            "May 2028",
            "West Lafayette, IN",
        ),
        Paragraph(
            "<b>Coursework:</b> Operating Systems, System Design, Object Oriented Programming, Linear Algebra",
            body_style,
        ),
        section("Experience"),
        block(
            "Software Engineer Intern",
            "Chewy",
            "Jun 2026 - Aug 2026",
            "Boston, MA",
            [
                "Led migration of a Java/Spring Boot application's backend, frontend, and API gateway from AWS ECS to EKS, redesigning deployment configs to support <b>5,000+ agents</b> and cut costs by <b>$100K/year</b>.",
                "Orchestrated a phased cutover across <b>18 environments</b>, building and validating Docker/EKS CI/CD migration workflows with <b>zero downtime</b>.",
                "Engineered an AI on-call agent that monitors Slack incidents and parses code and logs, cutting response time from <b>2 hours to 5 minutes</b> and saving 10+ hours per week.",
            ],
        ),
        block(
            "Software Engineer Intern",
            "Staples Inc.",
            "Jun 2025 - Aug 2025",
            "Boston, MA",
            [
                "Built an AI Jenkins agent that diagnosed <b>60+ daily pipeline failures</b> from build logs and stack traces, cutting CI/CD troubleshooting time by <b>60%</b>.",
                "Developed a RAG analytics chatbot over <b>1M+ live database rows</b> that generated dashboards and reports, saving 2+ hours per reporting cycle.",
                "Migrated release management for <b>100+ microservices</b> from JSP to React/Spring Boot, modernizing the deployment workflow for release engineers.",
            ],
        ),
        block(
            "Software Engineer",
            "Chip Count",
            "Jan 2026 - May 2026",
            "West Lafayette, IN",
            [
                "Scaled a poker settlement platform to <b>500+ users</b> with Next.js, Supabase, and Vercel.",
                "Cut settlement time by <b>93%+</b>, from 15+ minutes to under 1 minute, using an optimized debt-matching algorithm.",
                "Improved three core game workflows with persistent sessions, automated payouts, and validated URL state.",
            ],
        ),
        block(
            "Research Intern",
            "Indian Institute of Technology",
            "Jun 2024 - Aug 2024",
            "Mumbai, India",
            [
                "Built an R/dplyr pipeline to clean and process <b>20K+ wage survey records</b> for large-scale statistical analysis.",
                "Created four ggplot visualizations and automated reporting workflows, reducing manual analysis time by <b>30%</b>.",
            ],
        ),
        section("Selected Projects"),
        block(
            "LocalBrain (UC Berkeley Hacks 2026)",
            "Python, FastAPI, Next.js, Electron, Tailwind CSS",
            "",
            "",
            [
                "Built a local second brain storing <b>5,000+ data points</b> to bring durable context into LLM agents.",
                "Designed an indexing and retrieval layer letting LLMs query <b>10,000+ documents</b> with 90%+ accuracy.",
                "Implemented connector pipelines across 3+ sources, including Slack and Gmail, with ten-minute synchronization.",
            ],
        ),
        block(
            "Sports Betting Models",
            "Python, Pandas, NumPy, The Odds API, scikit-learn, PostgreSQL",
            "",
            "",
            [
                "Trained Random Forest regression models on <b>8,000+ NBA player logs</b>, predicting points, assists, and rebounds with <b>65% accuracy</b>.",
                "Built a real-time pipeline for <b>1,200+ weekly odds</b>, 100+ daily injury updates, and live player statistics.",
                "Reduced mean absolute error by <b>12%</b> with player-consistency feature engineering.",
            ],
        ),
        section("Technical Skills"),
        Paragraph(
            "<b>AI / ML:</b> PyTorch, Gemini API, OpenAI Codex, Claude Code, Cursor &nbsp;&nbsp; "
            "<b>Languages:</b> Python, Java, Go, C++, C#, SQL, JavaScript, TypeScript, HTML/CSS, Verilog HDL<br/>"
            "<b>Frameworks:</b> React Native, React, Node.js, Express.js, FastAPI, Expo, Prisma, Material UI, Unity &nbsp;&nbsp; "
            "<b>DevOps:</b> Git, Docker, AWS, Azure, Jenkins, Jira",
            body_style,
        ),
    ]

    document.build(story, onFirstPage=page_number, onLaterPages=page_number)
    print(OUTPUT)


if __name__ == "__main__":
    build_resume()
