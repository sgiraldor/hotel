import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Index(['tipo_documento', 'identificacion'], { unique: true })
@Entity()
export class Huesped {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  identificacion!: string;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column()
  telefono!: string;
  
  @Column({unique: true})
  correo!: string;

  @Column()
  tipo_documento!: string;
  
  @Column({type: 'date'})
  fecha_nacimiento!: Date;
}
