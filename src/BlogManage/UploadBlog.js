import React, { useState } from 'react';

const UploadBlog = ({ blog, onSubmit }) => {
  const [title, setTitle] = useState(blog ? blog.title : '');
  const [content, setContent] = useState(blog ? blog.content : '');
  const [contentSections, setContentSections] = useState(blog ? blog.contentSections : [{ heading: '', paragraphs: [''] }]);
  const [author, setAuthor] = useState(blog ? blog.author : '');
  const [tags, setTags] = useState(blog ? blog.tags.join(', ') : '');
  const [category, setCategory] = useState(blog ? blog.tags.join(', ') : '');
  const [frontImageFile, setFrontImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFrontImageFile(file); // Store the file object directly
  };

  const handleSectionChange = (sectionIndex, value) => {
    const newSections = [...contentSections];
    newSections[sectionIndex].heading = value;
    setContentSections(newSections);
  };

  const handleParagraphChange = (sectionIndex, paragraphIndex, value) => {
    const newSections = [...contentSections];
    newSections[sectionIndex].paragraphs[paragraphIndex] = value;
    setContentSections(newSections);
  };

  const addSection = () => {
    setContentSections([...contentSections, { heading: '', paragraphs: [''] }]);
  };

  const addParagraph = (sectionIndex) => {
    const newSections = [...contentSections];
    newSections[sectionIndex].paragraphs.push('');
    setContentSections(newSections);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Generate a slug from the title
      const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('slug', slug); // Add the slug to the form data
      formData.append('content', content);
      formData.append('contentSections', JSON.stringify(contentSections));
      formData.append('author', author);
      formData.append('category', category);
      formData.append('tags', tags);
      if (frontImageFile) {
        formData.append('frontImage', frontImageFile); // Append the file object
      }
  
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit blog');
      }
  
      const result = await response.json();
      console.log('Blog submitted successfully:', result);
  
      // Show success alert
      alert('Blog submitted successfully!');
  
      // Reset form fields
      setTitle('');
      setContent('');
      setContentSections([{ heading: '', paragraphs: [''] }]);
      setAuthor('');
      setTags('');
      setCategory('');
      setFrontImageFile(null);
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };  
  return (
    <form onSubmit={handleSubmit} className='text-black text-sm space-y-4'>
      <input className='w-full p-2 border border-gray-300 rounded' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea className='w-full p-2 border border-gray-300 rounded' value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
      
      {contentSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className='space-y-2'>
          <input
            className='w-full p-2 border border-gray-300 rounded'
            value={section.heading}
            onChange={(e) => handleSectionChange(sectionIndex, e.target.value)}
            placeholder="Section Heading"
          />
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <textarea
              key={paragraphIndex}
              className='w-full p-2 border border-gray-300 rounded'
              value={paragraph}
              rows={10}
              onChange={(e) => handleParagraphChange(sectionIndex, paragraphIndex, e.target.value)}
              placeholder="Paragraph"
            />
          ))}
          <button type="button" className='text-blue-500' onClick={() => addParagraph(sectionIndex)}>Add Paragraph</button>
        </div>
      ))}
      <button type="button" className='text-blue-500' onClick={addSection}>Add Section</button>

      <input className='w-full p-2 border border-gray-300 rounded' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      <input className='w-full p-2 border border-gray-300 rounded' value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma separated)" />
      <input className='w-full p-2 border border-gray-300 rounded' value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category (comma separated)" />
      <input type="file" className='w-full p-2 border border-gray-300 rounded' onChange={handleImageChange} required />
      <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Submit</button>
    </form>
  );
};

export default UploadBlog;
