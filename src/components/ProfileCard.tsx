import { useState } from 'react';
import { SkillBadge } from './SkillBadge';
import type { Skill } from './SkillBadge';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  email: string;
  githubUrl: string;
  skills: Skill[];
};

export const ProfileCard = ({
  name,
  role,
  bio,
  avatarUrl = 'https://via.placeholder.com/150',
  email,
  githubUrl,
  skills,
}: ProfileCardProps) => {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 border transition-all duration-300 max-w-md w-full ${
        isLiked ? 'border-pink-500 shadow-pink-100' : 'border-gray-200'
      }`}
    >
      <div className="flex items-center space-x-4 mb-4">
        <img
          className="w-20 h-20 rounded-full border-2 border-indigo-500 object-cover"
          src={avatarUrl}
          alt={`${name}'s avatar`}
        />
        <div>
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          <p className="text-indigo-600 text-sm font-medium">{role}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{bio}</p>

      <div className="mb-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Skills
        </h3>
        {skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-400 italic">No skills listed yet.</p>
        )}
      </div>

      <div className="flex justify-between items-center border-t pt-4">
        <a
          href={`mailto:${email}`}
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          Email
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          GitHub
        </a>

        <button
          onClick={handleLike}
          className={`text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 transition ${
            isLiked
              ? 'bg-pink-100 text-pink-600'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          <span>{isLiked ? '❤️' : '🤍'}</span>
          <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
        </button>
      </div>
    </div>
  );
};