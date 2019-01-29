import React from "react";
import 
    {
        Alert
    } 
from "../../components";

export class ImageUpload extends React.Component{
    constructor(props){
        super(props);
        this.dropzoneRef = null;
        this.dropzone = null;
        this.files = [];
        this.handlerChangeFile = this.handlerChangeFile.bind(this);
        this.handlerDeleteFile = this.handlerDeleteFile.bind(this);
        this.imagesPreview = this.imagesPreview.bind(this);
        this.state = {
            list: [],
            error: false,
            errorMessage: ''
        }
    }
    componentWillUnmount(){
        this.dropzoneRef = null;
        this.dropzone = null;
        this.files = null;
    }
    componentDidMount(){
        this.handlerChangeFile();
    }
    handlerChangeFile(){
        const self = this;
        $(this.dropzoneRef).on('change', function(){
            self.imagesPreview(this);
        });
    }
    handlerDeleteFile(item, key){
        this.files.splice(key, 1);
        const list = [...this.state.list];
        list.splice(key, 1);
        this.setState({list: list});
    }
    imagesPreview(input){
        if(input.files){
            const maxFiles = this.props.maxFiles ? this.props.maxFiles : 3;
            const self = this;
            const filesAmount = input.files.length;
            for(let i = 0; i < filesAmount; i++){
                let reader = new FileReader();
                reader.onload = function(event){
                    if(self.files.length < maxFiles){
                        const list = [...self.state.list];
                        list.push({
                            status: 'accepted',
                            url: event.target.result
                        });
                        self.setState({list: list}, () => {
                            self.files.push(input.files[i]);
                        });
                    }else{
                        self.setState({
                            error: true,
                            errorMessage: 'Only '+maxFiles+' images allowed'
                        });
                    }
                    self.dropzoneRef.value = '';
                    if(!/safari/i.test(navigator.userAgent)){
                        self.dropzoneRef.type = ''
                        self.dropzoneRef.type = 'file'
                    }
                }
                reader.readAsDataURL(input.files[i]);
            }
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.error
                    ? 
                    <Alert message={this.state.errorMessage}
                        onClose={() => this.setState({error: false, errorMessage: ''})}/>
                    : null
                }
                <div className="uk-flex uk-flex-wrap uk-flex-middle">
                    <div className="uk-position-relative uk-margin-bottom uk-margin-right">
                        <a className="uk-icon-link" uk-icon="icon: plus-circle; ratio: 6"></a>
                        <div className="js-upload uk-position-absolute uk-position-z-index
                            uk-position-top-left uk-box" uk-form-custom="true">
                            <input type="file" ref={instance => this.dropzoneRef = instance} multiple
                                accept="image/*"/>
                        </div>
                    </div>
                    {
                        this.state.list.map((item, key) => {
                            return (
                                <div key={key} className="uk-box uk-inline uk-cart uk-margin-bottom uk-margin-right">
                                    <div className="uk-position-center-right-out">
                                        <a className="uk-badge" onClick={() => this.handlerDeleteFile(item, key)}>
                                            <span uk-icon="icon: close; ratio: 0.8"/>
                                        </a>
                                    </div>
                                    <img className="uk-responsive-height" data-src={item.url} uk-img="true"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}