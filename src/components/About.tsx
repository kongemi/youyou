import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">关于我</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/images/musk.png" 
                alt="个人照片" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Peter</h3>
              <p className="text-lg text-gray-600 mb-4">技术爱好者 / 艺术创作者</p>
              <p className="text-gray-700">
                作为一名热爱科技与艺术的创作者，我致力于将两个领域的创新理念融合。多年来，我积累了丰富的技术经验，
                同时保持对艺术创作的热情。我相信，真正的创新来自于跨领域的思考和实践。
                无论是编写代码还是创作艺术作品，我都尝试用独特的视角去探索世界，并通过作品表达自己的理解和感悟。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 