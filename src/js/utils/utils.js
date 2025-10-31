export const writteMachineObserver = () => {
  const worksTitle = document.querySelector(".s-works .title-h2 span");
  const worksTextToDelete = worksTitle.textContent;
  const worksTextToWrite = "ORKS";
  const careerTitle = document.querySelector(".s-career .title-h2 span");
  const careerTextToDelete = careerTitle.textContent;
  const careerTextToWrite = "AREER";

  const parametersCallback = [
    {
      element: worksTitle,
      textToDelete: worksTextToDelete,
      textToWrite: worksTextToWrite,
      delayToWrite: 80,
      delayToDelete: 80,
    },
    {
      element: careerTitle,
      textToDelete: careerTextToDelete,
      textToWrite: careerTextToWrite,
      delayToWrite: 80,
      delayToDelete: 80,
    },
  ];

  createIntersectionObserver(
    [worksTitle, careerTitle],
    writteDeleteMachine,
    parametersCallback,
    {
      threshold: 1,
    },
    true
  );
};

export const createIntersectionObserver = (
  elements,
  callback,
  parametersCallback = [],
  options = {},
  observeOnce = false
) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const itemParametersCallback = parametersCallback.find(
          (item) => item.element === entry.target
        );

        if (itemParametersCallback) {
          callback(itemParametersCallback);
        } else {
          callback(entry.target);
        }

        if (observeOnce) observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach((element) => observer.observe(element));
};

export const writteDeleteMachine = async (data) => {
  console.log(data);
  await deleteMachine(data);
  await writteMachine(data);
};

export const deleteMachine = async (data) => {
  const { element, textToDelete, delayToDelete } = data;

  for (let i = textToDelete.length; i >= 0; i--) {
    element.textContent = textToDelete.substring(0, i);
    await new Promise((resolve) => setTimeout(resolve, delayToDelete));
  }
};

export const writteMachine = async (data) => {
  const { element, textToWrite, delayToWrite } = data;

  for (let i = 0; i < textToWrite.length; i++) {
    element.textContent += textToWrite[i];
    await new Promise((resolve) => setTimeout(resolve, delayToWrite));
  }
};

export const isOnRange = (valueToCheck, min, max) => {
  return valueToCheck >= min && valueToCheck <= max;
};

export const isEqualMajor = (valueToCheck, valueToCompare) => {
  return valueToCheck >= valueToCompare;
};

export const isMajor = (valueToCheck, valueToCompare) => {
  return valueToCheck > valueToCompare;
};

export const isEqualMinor = (valueToCheck, valueToCompare) => {
  return valueToCheck <= valueToCompare;
};

export const isMinor = (valueToCheck, valueToCompare) => {
  return valueToCheck < valueToCompare;
};

export const attachEvent = (element, event, functionToAttach) => {
  element.addEventListener(event, functionToAttach);
};

export function validateProp(name, value, type, allowedValues) {
  if (typeof value !== type)
    throw new TypeError(
      `"${name}" -> Debe ser de tipo ${type}. Recibido: ${typeof value}.`
    );

  if (allowedValues && !allowedValues.includes(value))
    throw new Error(
      `"${name}" -> Solo se permiten los valores ${allowedValues.join(
        ", "
      )}. Recibido: ${value}.`
    );
}
