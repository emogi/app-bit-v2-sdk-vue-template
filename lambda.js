// Deployed as a Lambda@Edge function on CloudFront Origin Request event
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;

  // Rewrite URI to index.html if not a resource
  if (!is_resource(request.uri)) {
    const parts = request.uri.split('/');
    if (parts.length > 1) {
      const appID = parts[1];
      const version = parts[2];
      request.uri = `/${appID}/${version}/index.html`;
    }
  }

  // Return to CloudFront
  return callback(null, request);
};

function is_resource(uri) {
  // List extensions of any filetypes that may be used.
  const extensions = [
    '.css',
    '.gif',
    '.ico',
    '.jpeg',
    '.jpg',
    '.js',
    '.map',
    '.mp4',
    '.png',
    '.svg',
    '.webm',
  ];
  for (const extension of extensions) {
    if (uri.endsWith(extension)) {
      return true;
    }
  }
  return false;
}
