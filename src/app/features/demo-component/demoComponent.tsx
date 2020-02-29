import * as React from 'react';
import mapImage from './images/test.png';
import './demoComponent.scss';
import {getDocument, DemoContent} from '../../services/demoService';

function DemoComponent(props: DemoComponentProps) {

    const {title, subTitle} = props;
    const [demoContent, setDemoContent] = React.useState<DemoContent>();

    React.useEffect(() => {
        getDemoDocument();
    }, []);

    async function getDemoDocument() {
        const req = await getDocument();
        setDemoContent(req);
    }

    return demoContent ? (
        <div className="DemoComponent">
            <p>
                {demoContent.firstName} {demoContent.lastName}<br />
                {title}<br />
                <small>{subTitle}</small>
            </p>
            <img src={mapImage} />
        </div>
    ) : null;
}

export default DemoComponent;

interface DemoComponentProps {
    title: string;
    subTitle: string;
}
