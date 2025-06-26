<<<<<<< HEAD
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
=======
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
>>>>>>> ed07601 (proshopv13)
};

Meta.defaultProps = {
  title: 'Welcome To ProShop',
  description: 'We sell the best products for cheap',
<<<<<<< HEAD
  keywords: 'electronics, buy electronics, cheap electronics',
=======
  keywords: 'electronics, buy electronics, cheap electroincs',
>>>>>>> ed07601 (proshopv13)
};

export default Meta;
