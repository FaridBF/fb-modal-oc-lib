# modal-component-library A library of React components created using `create-react-app`.

<span style="color:  #ADD8E6"> Installation Run the following command : `npm install fb-modal-oc-lib`</span>

This package is a part of the project 14 of the OpenClassrooms "Front End Developer" courses.

<span style="color:  #ADD8E6">If you are developing an application :</span>

To install the fb-modal-oc-lib at the root of the application, run

<span style="color:  #ADD8E6">You can find on npm here : </span> [npm install fb-modal-oc-lib](https://www.npmjs.com/package/fb-modal-oc-lib)

```
npm install fb-modal-oc-lib
```

You are need this version color : <span style="color: #FF0000"> v20.10.0 </span>for this project

To import the modal component into your application, import it at the root of the selected page.

<span style="color:  #ADD8E6">Import at the top of the list of imports this line : </span>

```
import { Modal } from 'fb-modal-oc-lib'
```

<span style="color:  #ADD8E6">Import this line at the top of the list of states used at the entry of your function :</span>

```
const [modalOpen, setModalOpen] = useState<boolean>(false);
```

<span style="color:  #ADD8E6">import this function before return :</span>

```
const handleCloseModal = () => {
    setModalOpen(false);
  };
```

<span style="color:  #ADD8E6">The list of dynamic modal properties and their types:</span>

- <span style="color: #26B260">isVisible: boolean </span> => Here, you will put the **state** of your modal. In the example proposed here, it is **modalOpen**.
- <span style="color: #26B260">title: string </span> => You can create the **title** and feed your modal via this property.
- <span style="color: #26B260">description: string </span> => You can create the **description** and feed your modal via this property.
- <span style="color: #26B260">src: string</span> => You can create the **image** and feed your modal via this property, here, you will need to put the **path** to your assets.
- <span style="color: #26B260">onClose: () => void</span> => Here, you go to the function that you **named to your liking in order to close the modal**. In the example proposed here, it is **handleCloseModal**.

<span style="color:  #ADD8E6">In the rendering section, import the modal as demonstrated in the example above:</span>

```
 return (
   <Modal
        isVisible={modalOpen}
        title='Personalized Title'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus elit libero, at finibus dolor auctor id. Aliquam ut lectus vitae odio tincidunt blandit. Vivamus cursus, lorem ut congue rutrum, lectus eros tristique lectus, vitae imperdiet massa purus a orci. Donec nibh'
        src={closeButtonImg}
        onClose={handleCloseModal}
      />
  );
```

<span style="color:  #ADD8E6">Visual illustrations of the “modal component library” interface</span>

<img src ="https://github.com/FaridBF/fb-modal-oc-lib/blob/main/assets/illustrationReadMe/modal-librairie.png" title = "modal component library" alt = "modal component library" />
