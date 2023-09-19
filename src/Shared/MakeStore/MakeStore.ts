// This file is from a tutorial on generics in Typescript
// From this youtube video: https://www.youtube.com/watch?v=PvK6o3xrN_A

// interface
type Store = {
  name: string;
  age: number;
  friends: string[];
};

// library
function createStore<TStore extends Record<string, any>>(initialState: TStore) {
  const store = initialState;
  return {
    setWithCallback<Key extends keyof TStore>(
      key: Key,
      callBack: (current: TStore[Key]) => TStore[Key]
    ) {
      store[key] = callBack(store[key]);
      return null;
    },
    set<Key extends keyof TStore>(key: Key, value: TStore[Key]) {
      store[key] = value;
      return null;
    },
    get<Key extends keyof TStore>(key: Key) {
      return store[key];
    },
  };
}

// client
const myStore = createStore<Store>({
  name: "Emil",
  age: 28,
  friends: [],
});

type MyStore = typeof myStore;
// type MyStoreAlt = ReturnType<typeof createStore<Store>>;

const friends = myStore.get("friends");
myStore.set("age", 29);
myStore.setWithCallback("age", (currentAge) => currentAge + 1);

function Header(store: MyStore) {
  console.log(store.get("age"));
  store.set("age", 94);
  console.log(store.get("age"));

  return "hello";
}

Header(myStore)

// misc playground
const myObject = {
  id: 1,
  name: "myobject",
  formatMessageForPrinting(msg) {
    return `[-["${msg}"]-]`;
  },
  printMethod(msg) {
    console.log(`Printing: ${this.formatMessageForPrinting(msg)}`);
  },
  description: "Can print things",
};

myObject.printMethod("Hello this beutiful worlds!");
