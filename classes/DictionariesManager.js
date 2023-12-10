class DictionariesManager {
  constructor(dictionaries) {
    this.__dictionaries = dictionaries;
    this.__chosenDictionary = localStorage.getItem("dictionary") || "cs50";
  }

  renderDictionariesList() {
    let str = "";
    for (let key in this.__dictionaries) {
      str += `<option value="${key}">${key}</option>`;
    }
    return str;
  }

  setChosenDictionary(name) {
    for (let key in this.__dictionaries) {
      if (key === name) {
        this.__chosenDictionary = name;
        localStorage.setItem("dictionary", name);
        return true;
      }
    }
    console.log("Dictionary wasn't set: ", name);
    return false;
  }

  getDictionary() {
    return this.__dictionaries[this.__chosenDictionary];
    }
    
  getDictionaryName() {
    return this.__chosenDictionary;
  }

}
