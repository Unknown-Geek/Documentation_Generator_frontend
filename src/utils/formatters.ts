export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatMetrics(metrics: Record<string, number>): string {
  return Object.entries(metrics)
    .map(([key, value]) => {
      const formattedKey = key.split('_').map(capitalizeFirstLetter).join(' ');
      return `${formattedKey}: ${typeof value === 'number' ? value.toFixed(2) : value}`;
    })
    .join('\n');
}