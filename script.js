const url = "https://angx1.github.io/weekly-quote/";

if (config.runsInWidget) {
  let widget = await createWidget();
  Script.setWidget(widget);
} else {
  let widget = await createWidget();
  widget.presentMedium();
}
Script.complete();

async function createWidget() {
  const req = new Request(url);
  const html = await req.loadString();

  let weeklyQuote = "Cita no encontrada.";
  let author = null;
  let weekInfo = "";

  const quoteRegex =
    /<blockquote[^>]*id="cita-semanal"[^>]*>(.*?)<\/blockquote>/s;
  const quoteMatch = html.match(quoteRegex);
  if (quoteMatch && quoteMatch[1]) {
    weeklyQuote = quoteMatch[1].trim();
  }

  const authorRegex = /<cite[^>]*id="autor-cita-semanal"[^>]*>(.*?)<\/cite>/s;
  const authorMatch = html.match(authorRegex);
  if (authorMatch && authorMatch[1]) {
    author = authorMatch[1].trim();
  }

  const weekRegex = /<p[^>]*id="semana-cita-semanal"[^>]*>(.*?)<\/p>/s;
  const weekMatch = html.match(weekRegex);

  if (weekMatch && weekMatch[1]) {
    let rawWeekText = weekMatch[1];
    let cleanText = rawWeekText.replace(/<!--\s*-->/g, "");
    weekInfo = cleanText.replace(/\s+/g, " ").trim();
  }

  let widget = new ListWidget();

  widget.backgroundColor = Color.white();
  widget.setPadding(30, 30, 30, 30);
  widget.addSpacer();

  let quoteText = widget.addText(weeklyQuote);
  quoteText.textColor = Color.black();
  quoteText.font = Font.lightMonospacedSystemFont(16);
  quoteText.leftAlignText();

  widget.addSpacer(8);

  if (author) {
    let authorText = widget.addText(author);
    authorText.textColor = new Color("#333333");
    authorText.font = Font.monoSystemFont(14);
    authorText.leftAlignText();
    widget.addSpacer(12);
  }

  let weekText = widget.addText(weekInfo);
  weekText.textColor = Color.gray();
  weekText.font = Font.lightMonospacedSystemFont(10);
  weekText.leftAlignText();

  widget.addSpacer();

  return widget;
}
