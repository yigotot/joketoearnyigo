import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Joketoearn } from '../target/types/joketoearn';

describe('joketoearn', () => {
  let provider = anchor.AnchorProvider.env();
  anchor.setProvider(anchor.AnchorProvider.env());
  anchor.setProvider(provider);
  const program = anchor.workspace.Joketoearn;


  it('It Creates a Joke!', async () => {
    const tx = await program.rpc.createJoke('Not funny..', {
      accounts: {
        authority: program.provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      //signers: [program.provider.wallet],
    });
  
    console.log("Your transaction signature", tx);
  });
});
