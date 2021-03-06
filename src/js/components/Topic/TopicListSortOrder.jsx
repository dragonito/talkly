import React from "react";

export default class TopicListSortOrder extends React.Component {
    constructor(props) {
        super(props);
    }

    sort(e, value) {
        e.preventDefault();
        this.props.filter('order', value);
    }

    render() {
        const columns = [
            {key: 'title_asc', label: 'A-Z'},
            {key: 'title_desc', label: 'Z-A'},
            {key: 'votes', label: 'Most Voted'},
            {key: 'newest', label: 'Newest'},
            {key: 'oldest', label: 'Oldest'},
            {key: 'schedule_date', label: 'Schedule-Date'}
        ];

        let columnMarkup = columns.map((column) => {
            let className = '';
            if (this.props.activeSortOrder == column.key) {
                className = 'active';
            }

            return (
                <dd key={column.key} className={className}> <a onClick={e => this.sort(e, column.key)}>{column.label}</a></dd>
            );
        });

        return (
            <dl className="sub-nav">
                <dt>Sort</dt>
                {columnMarkup}
            </dl>
        );
    }
}
