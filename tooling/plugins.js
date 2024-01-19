import { pluginEvents } from '@freecodecamp/freecodecamp-os/.freeCodeCamp/plugin/index.js';
import { ROOT } from '@freecodecamp/freecodecamp-os/.freeCodeCamp/tooling/env.js';
import { readFile } from 'fs/promises';
import { join } from 'path';

pluginEvents.onTestsStart = async (project, testsState) => {
  console.log('onTestsStart');
};

pluginEvents.onTestsEnd = async (project, testsState) => {
  console.log('onTestsEnd');
};

pluginEvents.onProjectStart = async project => {
  console.log('onProjectStart');
};

pluginEvents.onProjectFinished = async project => {
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
  console.log('onProjectFinished');
};

pluginEvents.onLessonFailed = async project => {
  console.log('onLessonFailed');
};

pluginEvents.onLessonPassed = async project => {
  console.log('onLessonPassed');
};