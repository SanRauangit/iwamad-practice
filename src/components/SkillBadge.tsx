export type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">
      {skill.label}
    </span>
  );
};