async function generateReport() {
  const { generate } = await import('multiple-cucumber-html-reporter');

  generate({
    jsonDir: 'reports',
    reportPath: 'reports/html',
    displayDuration: true,
    displayReportTime: true,
    pageTitle: 'BDD Test Report — jira-to-playwright-agent',
    reportName: 'BDD Test Report',
    metadata: {
      browser: { name: 'chromium', version: 'latest' },
      device: 'Local Machine',
      platform: { name: 'windows', version: '11' },
    },
    customData: {
      title: 'Execution Info',
      data: [
        { label: 'Project', value: 'jira-to-playwright-agent' },
        { label: 'Framework', value: 'Playwright + Cucumber BDD' },
        { label: 'Report Generated', value: new Date().toISOString() },
      ],
    },
  });
}

generateReport();
