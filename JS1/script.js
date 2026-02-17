// ================================
// Markdown to HTML Converter
// @author: Paul Buchwald
// ================================
// This program converts markdown syntax to HTML for FCC's JavaScript curriculum. 

function convertMarkdown() {
  // Get the text from the input
  let text = document.getElementById('markdown-input').value;
  
  // Convert headings (only at the start of a line)
  text = text.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  text = text.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  text = text.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  
  // Convert blockquotes (only at the start of a line)
  text = text.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  
  // Convert images (must be before links)
  text = text.replace(/!\[(.+?)\]\((.+?)\)/g, '<img alt="$1" src="$2">');
  
  // Convert links
  text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  
  // Convert bold (must be before italic to avoid conflicts)
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/__(.+?)__/g, '<strong>$1</strong>');
  
  // Convert italic
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
  text = text.replace(/_(.+?)_/g, '<em>$1</em>');
  
  return text;
}

// Get the input and output elements
const input = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

// Listen for when user types
input.addEventListener('input', function() {
  const html = convertMarkdown();
  htmlOutput.textContent = html;
  preview.innerHTML = html;
});