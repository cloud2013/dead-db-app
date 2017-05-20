export class DeadbaseClass {
    public total_rows : number;
    public offset : number;
    public Concert : DeadbaseConcertClass;
    public Tracks: Array<DeadbaseTrackClass>;
}

export class DeadbaseConcertClass{
    public DocumentType: string;
    public Date: string;
    public ConcertUNI: string;
    public Venue: string;
    public SB: boolean;
    public MX: boolean;
    public Miller: boolean;
    public Tracks: number;
    public Seconds: number;
}

export class DeadbaseTrackClass{
     public DocumentType: string;
     public Date: string;
     public TimeFMT: string;
     public Seconds: number;
     public SongUNI: string;
     public Track: string;
     public Title: string;

}
