import React, { useState } from 'react';
import { initializeApp } from "firebase/app"; // Import Firebase
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Storage functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrJ-UYAzOa9wWGfSOKaS8Ks5fBbhgxkeA",
  authDomain: "codingtypingmasterblogapi.firebaseapp.com",
  projectId: "codingtypingmasterblogapi",
  storageBucket: "codingtypingmasterblogapi.appspot.com",
  messagingSenderId: "829212674160",
  appId: "1:829212674160:web:9d619a3275573d4fab0cb5",
  measurementId: "G-2GJEH8MEJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Initialize Storage

const UploadBlog = ({ blog, onSubmit }) => {
  const [title, setTitle] = useState(blog ? blog.title : '');
  const [content, setContent] = useState(blog ? blog.content : '');
  const [contentSections, setContentSections] = useState(blog ? blog.contentSections : [{ heading: '', paragraphs: [''] }]);
  const [author, setAuthor] = useState(blog ? blog.author : '');
  const [tags, setTags] = useState(blog ? blog.tags.join(', ') : '');
  const [category, setCategory] = useState(blog ? blog.category.join(', ') : '');
  const [frontImageFile, setFrontImageFile] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file); // Upload file to Firebase
      const url = await getDownloadURL(storageRef); // Get the download URL
      setFrontImageFile(url); // Store the URL instead of the file object
      console.log('Uploaded image URL:', url); // Log the URL
    }
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
      formData.append('slug', slug);
      formData.append('content', content);
      formData.append('contentSections', JSON.stringify(contentSections));
      formData.append('author', author);
      formData.append('category', category);
      formData.append('tags', tags);
      formData.append('frontImage', frontImageFile); // Use the URL instead of the file object
  
      // Log the front image URL
      console.log('Front image URL:', frontImageFile); // Log the URL
  
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
