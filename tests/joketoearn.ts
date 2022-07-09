import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Joketoearn } from '../target/types/joketoearn';

describe('joketoearn', () => {
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Joketoearn as Program<Joketoearn>;

  it('It Creates a Joke!', async () => {
    const tx = await program.rpc.createJoke('Not funny..');
    console.log("Your transaction signature", tx);
  });
});