export default async function decorate(block) {
  // Get the spreadsheet URL from the block's first anchor tag
  const link = block.querySelector('a');
  const path = link ? link.href : '';

  if (path) {
    try {
      const response = await fetch(path);
      const json = await response.json();
      const data = json.data; // EDS JSON format usually nest data under a 'data' key

      // Clear existing content and render data
      block.textContent = '';
      data.forEach((row) => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${row.columnHeaderName}</p>`; // Use your spreadsheet headers as keys
        block.append(div);
      });
    } catch (err) {
      console.error('Failed to fetch spreadsheet data:', err);
    }
  }
}
