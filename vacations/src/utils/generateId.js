const generateId = (prefix = 'prefix') => new Date().getTime() + prefix;
export default generateId;
