export class MenuItem {
	public createdBy: String;
	public createdDate: number;
	public fullPath: String;
	public screenId: String;
	public screenOid: number;
	public description: String;
	public tag: String;
	public highlighted: String;
	public hitScore: number;

    constructor(
        createdBy: String,
        createdDate: number,
        fullPath: String,
        screenId: String,
        screenOid: number,
        description: String,
        tag: String,
        highlighted: String,
        hitScore: number
        ) {
            this.createdBy = createdBy;
            this.createdDate = createdDate;
            this.fullPath = fullPath;
            this.screenId = screenId;
            this.screenOid = screenOid;
            this.description = description;
            this.tag = tag;
            this.highlighted = highlighted;
            this.hitScore = hitScore;
        }
}