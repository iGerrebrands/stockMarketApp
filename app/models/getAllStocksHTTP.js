import rp from 'request-promise';

export default () => {
    return rp('http://www.plus500.nl/Common/InstrumentsLookupHandler.ashx?gid=23&hl=nl&op=Plus500CY');
}