import React, { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: '内蒙古草原风光',
    category: '摄影',
    image: '/images/内蒙古草原.jpeg',
    description: '这是我在内蒙古大草原拍摄的照片，广阔无边的草原让人感受到大自然的壮美与宁静。天空与草原的交界处，勾勒出一幅美丽的自然画卷。'
  },
  {
    id: 2,
    title: '九寨沟水景',
    category: '摄影',
    image: '/images/九寨沟.jpg',
    description: '九寨沟的湖水清澈见底，色彩斑斓。这张照片记录了九寨沟独特的自然景观，是大自然鬼斧神工的杰作。'
  },
  {
    id: 3,
    title: '鸿蒙系统',
    category: '技术',
    image: '/images/hmos.png',
    description: '这是鸿蒙操作系统的标志，代表了中国科技创新的成果。该系统为万物互联提供了新的可能性。'
  },
  {
    id: 4,
    title: '书法作品',
    category: '艺术',
    image: '/images/书法作品1.jpg',
    description: '这是我的书法作品，融合了传统与现代的书写风格。通过书法，我尝试表达对传统文化的理解和热爱。'
  },
  {
    id: 5,
    title: '略字书法',
    category: '艺术',
    image: '/images/略字书法.avif',
    description: '这是我创作的"略"字书法作品，采用了半草书的风格，展现了汉字的美感与力量。'
  },
  {
    id: 6,
    title: '科技创新',
    category: '技术',
    image: '/images/musk.png',
    description: '这张图片象征着现代科技创新精神，代表着不断突破边界、挑战可能的精神。'
  }
];

type GalleryItem = typeof galleryItems[0];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (id: number) => {
    setSelectedItem(id);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const selectedWork = selectedItem !== null 
    ? galleryItems.find(item => item.id === selectedItem) 
    : undefined;

  return (
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">作品展示</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          这里展示了我的部分作品集，包括摄影、书法和技术项目。点击任意作品可查看详细信息。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => openModal(item.id)}
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-4">
              <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 rounded-full mb-2">
                {item.category}
              </span>
              <h3 className="text-xl font-medium">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* 弹窗详情 */}
      {selectedItem !== null && selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedWork.image} 
                alt={selectedWork.title} 
                className="w-full h-auto max-h-[50vh] object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{selectedWork.title}</h3>
                  <span className="inline-block px-2 py-1 text-sm font-medium bg-gray-100 rounded-full mt-1">
                    {selectedWork.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-700">{selectedWork.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 