var searchField = $("#search-field").ghostHunter({
  results:"#search-results",
  result_template : "<h4>{{PubDate}}</h4><a href='{{link}}'><h2>{{title}}</h2>{{description}}</a><br />",
  onKeyUp:true,
  includepages:true,
  onPageLoad: true,
  zeroResultsInfo: false
});
function clearResults() {
  searchField.clear();
}
