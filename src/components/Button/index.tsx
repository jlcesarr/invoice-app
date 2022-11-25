import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonRootProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
  className: string;
}

function ButtonRoot({
  children,
  variant = 'primary',
  className
}: ButtonRootProps) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center rounded-[24px] h-[48px] text-center gap-x-[16px] min-w-[150px] px-2 transition-colors font-spartan-bold text-sm leading-[15px] tracking-[-0.25px]',
        {
          'bg-violet-primary hover:bg-violet-secondary text-[#FFF]':
            variant == 'primary',
          'bg-white-secondary hover:bg-lavender-primary  dark:bg-yankees-secondary dark:hover:bg-[#FFF] text-ube-primary dark:text-lavender-primary':
            variant == 'secondary',
          'bg-charcoal  hover:bg-black-primary dark:hover:bg-yankees-primary text-grey-primary dark:text-lavender-primary':
            variant == 'tertiary',
          'bg-opal-primary hover:bg-pink-primary text-[#FFF]':
            variant == 'quaternary',
          'bg-white-secondary hover:bg-lavender-primary text-ube-primary':
            variant == 'quinary'
        },
        className
      )}
    >
      {children}
    </button>
  );
}

ButtonRoot.displayName = 'Button.Root';

interface ButtonIconWrapperProps {
  children: JSX.Element;
}

function ButtonIconWrapper({ children }: ButtonIconWrapperProps) {
  return (
    <div className="w-[32px] h-[32px] rounded-full bg-[#FFF] flex items-center justify-center">
      {children}
    </div>
  );
}
ButtonIconWrapper.displayName = 'Button.IconWrapper';

export const Button = {
  Root: ButtonRoot,
  IconWrapper: ButtonIconWrapper
};
