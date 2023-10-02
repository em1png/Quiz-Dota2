import { useState } from 'react'
import { Switch } from '@headlessui/react'

function MyToggle({ darkMode }) {
  // For update component.
  const [themeToggler, setThemeToggler] = useState(false);

  const changeColorMode = () => {
    setThemeToggler(!themeToggler);
    darkMode(!themeToggler);
  }

  return (
    <Switch
      checked={themeToggler}
      onChange={changeColorMode}
      className={`${themeToggler ? 'bg-gray-700' : 'bg-gray-600'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${themeToggler ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}

export default MyToggle;