## Weekly Quote Widget

A simple project that displays a custom weekly quote on your iPhone Home Screen using a Scriptable widget. The quote is managed in this repository and served via a static Next.js site on GitHub Pages.

### Preview

<!-- Add your screenshot here -->
<!-- Example: ![Widget Preview](./images/screenshot.png) -->

<br>

### How It Works

1.  A Next.js application builds a static HTML page containing the quote.
2.  This static site is hosted for free using GitHub Pages.
3.  A Scriptable widget on an iPhone fetches the HTML content of the page.
4.  The script parses the HTML to find the quote, author, and week number.
5.  The widget then displays this information on the Home Screen.

### Installation Guide

Follow these steps to set up the widget on your iPhone.

<details>
<summary>See iPhone installation demo</summary>
</details><br/>

#### Step 1: Install Scriptable app on the AppStore

#### Step 2: Create a New Script

1.  Open the Scriptable app.
2.  Tap the `+` icon in the top-right corner to create a new script.
3.  Tap on the script name at the top (e.g., "Untitled Script") and rename it to something memorable, like `Weekly Quote`.
4.  Copy the entire code below and paste it into the script editor, replacing any existing content.

<details>
<summary>Click here to view the widget code</summary>

```javascript
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
  if (quoteMatch && quoteMatch) {
    weeklyQuote = quoteMatch.trim();
  }

  const authorRegex = /<cite[^>]*id="autor-cita-semanal"[^>]*>(.*?)<\/cite>/s;
  const authorMatch = html.match(authorRegex);
  if (authorMatch && authorMatch) {
    author = authorMatch.trim();
  }

  const weekRegex = /<p[^>]*id="semana-cita-semanal"[^>]*>(.*?)<\/p>/s;
  const weekMatch = html.match(weekRegex);

  if (weekMatch && weekMatch) {
    let rawWeekText = weekMatch;
    let cleanText = rawWeekText.replace(/<!--\s*-->/g, "");
    weekInfo = cleanText.replace(/\s+/g, " ").trim();
  }

  let widget = new ListWidget();

  widget.backgroundColor = Color.white();

  // setPadding(top, leading, bottom, trailing)
  widget.setPadding(15, 15, 15, 15);

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
```
