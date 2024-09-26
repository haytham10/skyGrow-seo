module.exports = function(fileInfo, api) {
	const j = api.jscodeshift;
	const root = j(fileInfo.source);
  
	return root
	  .find(j.JSXElement, {
		openingElement: { name: { name: 'Link' } }
	  })
	  .forEach(path => {
		const { node } = path;
		if (node.children.length === 1 && node.children[0].type === 'JSXElement' && node.children[0].openingElement.name.name === 'a') {
		  const aElement = node.children[0];
		  const aAttributes = aElement.openingElement.attributes;
		  const linkAttributes = node.openingElement.attributes;
  
		  // Move className from <a> to <Link>
		  const classNameAttr = aAttributes.find(attr => attr.name && attr.name.name === 'className');
		  if (classNameAttr) {
			linkAttributes.push(classNameAttr);
			aAttributes.splice(aAttributes.indexOf(classNameAttr), 1);
		  }
  
		  // Replace <a> with its children
		  node.children = aElement.children;
		}
	  })
	  .toSource();
  };