import { useEffect } from 'react';

const Meta = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const desc = document.createElement('meta');
      desc.name = 'description';
      desc.content = description;
      document.head.appendChild(desc);
    }

    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const key = document.createElement('meta');
      key.name = 'keywords';
      key.content = keywords;
      document.head.appendChild(key);
    }
  }, [title, description, keywords]);

  return null; // No JSX needed
};

Meta.defaultProps = {
  title: 'Welcome To ProShop',
  description: 'We sell the best products for cheap',
  keywords: 'electronics, buy electronics, cheap electronics',
};

export default Meta;
