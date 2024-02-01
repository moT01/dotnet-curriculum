import { pluginEvents } from '@freecodecamp/freecodecamp-os/.freeCodeCamp/plugin/index.js';
import { ROOT } from '@freecodecamp/freecodecamp-os/.freeCodeCamp/tooling/env.js';
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';

pluginEvents.onTestsStart = async (project, testsState) => {};

pluginEvents.onTestsEnd = async (project, testsState) => {};

pluginEvents.onProjectStart = async project => {};

pluginEvents.onProjectFinished = async project => {
  const dir = await readdir(join(ROOT, 'config'));

  if (dir.includes('token.txt')) {
    const token = await readFile(join(ROOT, 'config/token.txt'));
    console.log(`Using ${token} to save progress`);

    // Below is an example. A new endpoint should be created
    //   await fetch(
    //     'https://api.freecodecamp.org/challenge/coderoad-challenge-completed',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'CODEROAD-USER-TOKEN': token
    //       },
    //       body: JSON.stringify({
    //         tutorialId: project.dashedName
    //       })
    //     }
    //   );
  }
};

pluginEvents.onLessonFailed = async project => {};

pluginEvents.onLessonPassed = async project => {};
