/* eslint-disable no-undef */
import React, { Component } from 'react';
import Loader from '../loader';
import { fileUpload } from '../../utils/network';

const MAX_SIZE = 2097152; // 1024 * 1024 * 2
const imageTypes = ['.jpg', '.JPG', '.jpeg', '.JPEG', '.pjpg', '.png', '.PJPG', '.PNG', '.gif', '.GIF'];

export default class FileUpload extends Component {
    form = null;

    state = {
        error: '',
        loading: false,
    };

    onChange = e => {
        const file = e.target.files[0];
        if (!this.validateImage(file)) {
            this.form.reset();
            return;
        }

        this.setState({ error: '' });
        this.uploadFile(file);
    }

    uploadFile = async file => {
        const formData = new FormData();
        formData.append('file', file);

        this.setState({ loading: true });

        const data = await fileUpload(formData);

        this.setState({ loading: false }, () => {
            this.form.reset();
            if (data.statusCode === 200) {
                this.props.onUpload(data.response.fileId);
            } else {
                this.setState({ error: API_ERROR_MESSAGE });
            }
        });
    }

    validateImage = file => {
        const imageExtension = file.name.substring(file.name.lastIndexOf('.'));
        const imageSize = file.size;
        if (imageTypes.indexOf(imageExtension) < 0) {
            this.setState({
                error: 'Please Select only Image Files. Supported formats : .jpg, .png',
            });
            return false;
        } else if (imageSize > MAX_SIZE) {
            this.setState({
                error: 'Maximum file size allowed is 2MB',
            });
            return false;
        }

        return true;
    }

    render() {
        return (
            <form ref={ref => { this.form = ref; }}>
                <Loader show={this.state.loading} />
                <div className="form-group">
                    <input type="file" onChange={this.onChange} accept="image/png, image/jpeg"/>
                    <small className="text-danger">{this.state.error}</small>
                </div>
            </form>
        )
    }
}